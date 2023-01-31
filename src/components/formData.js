import * as Yup from 'yup'
import moment from 'moment'

export const initialValues = {
  name: '',
  description: '',
  labels: [],
  latitude: '',
  longitude: '',
  recording_device: 'smartphone',
  data: '',
  file: '',
  audio_duration: '',
  recorded_at: moment().format('YYYY-MM-DDTHH:mm')
}

export const validationSchema = Yup.object({
  name: Yup.string().required('Ingrese el nombre del audio'),
  description: Yup.string(),
  labels: Yup.array(),
  latitude: Yup.string().required('Seleccione un punto en el mapa'),
  longitude: Yup.string().required(''),
  recording_device: Yup.string().required('Obligatorio'),
  data: Yup.mixed().required('Debe subir un archivo de audio'),
  recorded_at: Yup.string().required('Obligatorio')
})
