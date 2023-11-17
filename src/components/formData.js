import * as Yup from 'yup'
import moment from 'moment'

export const initialValues = {
  name: '',
  description: '',
  labels: [],
  latitude: '',
  longitude: '',
  recording_device: 'smartphone',
  audio: {
    data: '',
    format: '',
    size: '',
    duration: '',
  },
  recorded_at: moment().format('YYYY-MM-DDTHH:mm')
}

export const validationSchema = Yup.object({
  name: Yup.string().required('Ingrese un título'),
  description: Yup.string(),
  labels: Yup.array(),
  latitude: Yup.string().required('Seleccione un punto en el mapa'),
  longitude: Yup.string().required(''),
  recording_device: Yup.string().required('Obligatorio'),
  audio: Yup.object({
    data: Yup.mixed().required('Debe subir un archivo de audio'),
  }),
  recorded_at: Yup.string().required('Obligatorio')
})

function getPeriodByDate(dateTimeString) {
  const date = new Date(dateTimeString);
  const hours = date.getHours();

  if (hours >= 7 && hours <= 22) {
    return 'day';
  } else {
    return 'night';
  }
}

export const initialRoadsValues = {
  name: '',
  description: '',
  labels: [],
  latitude: '',
  longitude: '',
  audio: {
    data: '',
    format: '',
    size: '',
    duration: '',
  },
  video: {
    data: '',
    format: ' ',
    size: '',
    duration: '',
  },
  recorded_at: moment().format('YYYY-MM-DDTHH:mm'),
  period: getPeriodByDate(moment().format('YYYY-MM-DDTHH:mm'))
}

export const validationRoadsSchema = Yup.object({
  name: Yup.string().required('Ingrese un título'),
  description: Yup.string(),
  labels: Yup.array(),
  latitude: Yup.string().required('Seleccione un punto en el mapa'),
  longitude: Yup.string().required('Seleccione un punto en el mapa'),
  audio: Yup.object({
    data: Yup.mixed(),
  }),
  video: Yup.object({
    data: Yup.mixed(),
  }),
  recorded_at: Yup.string().required('Obligatorio'),
}).test('at-least-one-data', 'Al menos uno de los campos es requerido', function (value) {
  const audioData = value?.audio?.data;
  const videoData = value?.video?.data;

  if (!audioData && !videoData) {
    return this.createError({
      path: 'audio.data',
      message: 'Debes subir audio o video',
    });
  }

  return true;
});
/*

*/