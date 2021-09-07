import { useState, useEffect, useRef } from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import Select from 'react-select';
import { Backdrop, Snackbar, CircularProgress, TextField, Button, Grid, Select as MaterialSelect, MenuItem, InputLabel, makeStyles} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { styled } from '@material-ui/core/styles';
import GraphicEqRoundedIcon from '@material-ui/icons/GraphicEqRounded';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import dynamic from "next/dynamic";
import Head from "next/head";
import moment from 'moment';
import { useForm, Controller } from "react-hook-form";
import makeAnimated from 'react-select/animated';
import { taxonomyOptions } from '../data/taxonomy';
import chroma from 'chroma-js';
import postAudioData from '../utilities/api'

const animatedComponents = makeAnimated();
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} {...props} />;
}
const InputFile = styled('input')({
  display: 'none',
});

const MapWithNoSSR = dynamic(() => import("../components/geopositionData").then((v) => v.Map), {
  ssr: false,
});

export default function FormPage(props) {
  const classes = useStyles();

  const Card = ({ children }) => {
    return (
      <Box style={{ padding: '1rem', transition: 'color 0.15s ease, border-color 0.15s ease' }} >
        {children}
      </Box>
    );
  }

  const AudioPlayer = () => (
    <audio id='audio_tag' controlsList="nodownload" controls>
      <source src={audio} type="audio/wav" />
    </audio>
  )

  //Name
  const [name, setName] = useState()
  const nameInput = useRef();

  useEffect(() => {
    nameInput.current.focus();
  }, [name]);

  const onNameChange = e => {
    setName(e.currentTarget.value);
  };

  //Recording device
  const [recording_device, setRecordingDevice] = useState();

  const onRecordingDeviceChanged = e => {
    setRecordingDevice(e.target.value);
  };

  //Description
  const [description, setDescription] = useState()
  const descriptionInput = useRef();

  useEffect(() => {
    descriptionInput.current.focus();
  }, [description]);

  const onDescriptionChange = e => {
    setDescription(e.currentTarget.value);
  };

  //Tags
  const [tags, setTags] = useState()

  const orderOptions = values => {
    return values.filter(v => v.isFixed).concat(values.filter(v => !v.isFixed));
  };

  const onTagChange = (value, { action, removedValue }) => {
    switch (action) {
      case 'remove-value':
      case 'pop-value':
        if (removedValue.isFixed) {
          return;
        }
        break;
      case 'clear':
        value = taxonomyOptions.filter(v => v.isFixed);
        break;
    }

    value = orderOptions(value);
    setTags( value );
  };

  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : null,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',
  
        ':active': {
          ...styles[':active'],
          backgroundColor:
            !isDisabled && (isSelected ? data.color : color.alpha(0.1).css()),
        },
      };
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: color.alpha(0.2).css(),
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ':hover': {
        backgroundColor: data.color,
        color: 'white',
      },
    }),
  };

  const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
  };
  
  const formatGroupLabel = data => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );
  
  //Map coords
  const [position, setPosition] = useState(props)

  function MapCoords(event) {
    setPosition(event.latlng);
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (location) {
        var coords = { lat: location.coords.latitude, lng: location.coords.longitude }
        setPosition(coords)
      });
    }
  }, []);


  // Alerts
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFailed, setOpenFailed] = useState(false);
  const [openFillWarn, setOpenFillWarn] = useState(false);
  const [openLongWarn, setOpenLongWarn] = useState(false);
  const [openFormatWarn, setOpenFormatWarn] = useState(false);
  const handleCloseSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
  };
  const handleCloseFailed = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenFailed(false);
  };
  const handleCloseFillWarn = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenFillWarn(false);
  };
  const handleCloseLongWarn = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenLongWarn(false);
  };
  const handleCloseFormatWarn = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenFormatWarn(false);
  };

  // Loading
  const [loading, setLoading] = useState(false);

  //Audio file
  const [file, setFile] = useState();
  const [audio, setAudio] = useState();
  const [audioBase64, setAudioBase64] = useState();

  const uploadAudio = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      var file_type = (i.type).split("/",)[0]
      if (file_type == 'audio'){
        var reader = new FileReader();
        reader.readAsDataURL(i);
        const audio_object = URL.createObjectURL(i)
        reader.onload = function(e) {
          var media = new Audio(reader.result);
          media.onloadedmetadata = function(){
              var audio_duration = media.duration
              if (audio_duration <= 60){
                setAudio(audio_object)
                setFile(i);
                setAudioBase64(e.target.result)
              }
              else{
                setOpenLongWarn(true);
              }
          };
        };
      }
      else {
        setOpenFormatWarn(true);
      }
    }
  };


  const [responseCode, setResponseCode] = useState();

  const { control, handleSubmit, reset, formState, formState: { isSubmitSuccessful } } = useForm();
  const onSubmit = async data => {
    var duration = document.getElementById("audio_tag").duration
    var user_test = {
      category: "enterprise",
      username: "username"
    }
    var tags_list = [];
    if (data.tags) {
      Object.keys(data.tags).forEach((key) => {
        tags_list.push(data.tags[key].value)
      })
    }

    var tags = [{
      username : 'username',
      source_tags : tags_list
    }]
    
    var full_data = {
      name: data.name,
      description: data.description,
      format: file.type,
      size: file.size,
      duration: duration,
      recorded_at: moment(data.recorded_at).unix(),
      uploaded_at: moment().unix(),
      latitude: data.latitude,
      longitude: data.longitude,
      data: audioBase64,
      recording_device: data.recording_device,
      user: user_test,
      tags: tags
    }

    if (full_data.name == '' || full_data.latitude == ''){
      setOpenFillWarn(true)
    }
    else{
      const postAudio = () => {
        setLoading(true)
        return Promise.resolve(postAudioData(full_data));
      };
      postAudio().then((res) => {
        res.code = 404
        //res.code = 200
        setResponseCode(res.code)
        if (res.code == 200){
          setName('')
          setDescription('')
          setTags()
          setPosition({})
          setRecordingDevice('')
          setFile()
          setAudio()
          setAudioBase64()
          document.getElementById("audioFile").value = "";
          reset()
          setOpenSuccess(true)
          setLoading(false)
        }
        else {
          setLoading(false)
          setOpenFailed(true)
        }
      })
    }
  };

  return (
    <div>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Head>
            <title>Subida de Audio</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1 style={{ fontSize: '2rem', textAlign: 'center' }}>Formulario de subida de audio</h1>
          <Snackbar open={openFormatWarn} anchorOrigin={{vertical: 'top', horizontal: 'center'}} autoHideDuration={6000} onClose={handleCloseFormatWarn}>
            <Alert onClose={handleCloseFormatWarn} severity="warning">
              Formato de archivo inválido, debe ser un archivo de audio.
              Formatos válidos: <strong>WAV - MP3 - AIFF</strong>
            </Alert>
          </Snackbar>
          <Snackbar open={openLongWarn} anchorOrigin={{vertical: 'top', horizontal: 'center'}} autoHideDuration={6000} onClose={handleCloseLongWarn}>
            <Alert onClose={handleCloseLongWarn} severity="warning">
              Archivo de audio demasiado largo. La duración máxima es de <strong>60 segundos.</strong>
            </Alert>
          </Snackbar>
          <Snackbar open={openFillWarn} anchorOrigin={{vertical: 'top', horizontal: 'center'}} autoHideDuration={6000} onClose={handleCloseFillWarn}>
            <Alert onClose={handleCloseFillWarn} severity="warning">
              Debe rellenar los campos faltantes.
            </Alert>
          </Snackbar>
          <Snackbar open={openSuccess} anchorOrigin={{vertical: 'top', horizontal: 'center'}} autoHideDuration={6000} onClose={handleCloseSuccess}>
            <Alert onClose={handleCloseSuccess} severity="success">
              Archivo de audio enviado con éxito.
            </Alert>
          </Snackbar>
          <Snackbar open={openFailed} anchorOrigin={{vertical: 'top', horizontal: 'center'}} autoHideDuration={6000} onClose={handleCloseFailed}>
            <Alert onClose={handleCloseFailed} severity="error">
              <strong> HTTP error: status code {responseCode}. </strong>
              Vuelva a intentarlo más tarde.
            </Alert>
          </Snackbar>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Flex
            flexDirection="column"
            justifyContent="center">
            <MapWithNoSSR onClick={MapCoords} />
          </Flex>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <form id='audioForm' onSubmit={handleSubmit(onSubmit)}>
            <Stack
              alignItems="left"
              spacing="10px">
              <Grid container justifyContent="center" >
                <Card>
                  <label htmlFor="audioFile">
                    <InputFile name="audioFile" accept="audio/*" id="audioFile" type="file" onChange={uploadAudio} />
                    <Button variant="contained" component="span" startIcon={<GraphicEqRoundedIcon />}>
                      Subir archivo
                    </Button>
                    {
                      file &&
                      <p style={{ textAlign: 'center', marginBottom: -20 }}><b>Archivo: </b> {file.name} </p>
                    }
                  </label>
                </Card>
                {
                  audio &&
                  <Card>
                    <AudioPlayer />
                  </Card>
                }
              </Grid>
              <Card>
                <InputLabel shrink htmlFor="select-multiple-native">
                  Nombre de audio
                </InputLabel>
                <Controller
                  name="name"
                  defaultValue=""
                  value={name}
                  onChange={onNameChange}
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <TextField
                    {...field}
                    inputRef={nameInput}
                    type="text"
                    style={{ width: '100%' }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />}
                />
              </Card>

              <Card>
                <InputLabel shrink htmlFor="select-multiple-native">
                  Dispositivo de grabación
                </InputLabel>
                <Controller
                  name="recording_device"
                  control={control}
                  defaultValue={"smartphone"}
                  value={recording_device}
                  onChange={onRecordingDeviceChanged}
                  render={({ field }) => <MaterialSelect 
                    {...field}
                    style={{ width: '100%' }}
                    variant="outlined"
                    >
                    <MenuItem value={"smartphone"}>Teléfono celular</MenuItem>
                    <MenuItem value={"sonometer"}>Sonómetro</MenuItem>
                    </MaterialSelect>}
                />
              </Card>
              <Grid container>
                <Grid item sm={6} xs={6}>
                  <Card>
                    <Controller
                      name="latitude"
                      control={control}
                      defaultValue={position.lat}
                      rules={{ required: true }}
                      render={({ field }) => <TextField
                        {...field}
                        label="Latitud"
                        value={position.lat}
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="outlined"
                      />}
                    />
                  </Card>
                </Grid>
                <Grid item sm={6} xs={6}>
                  <Card>
                    <Controller
                      name="longitude"
                      control={control}
                      defaultValue={position.lng}
                      rules={{ required: true }}
                      render={({ field }) => <TextField
                        {...field}
                        label="Longitud"
                        value={position.lng}
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="outlined"
                      />}
                    />
                  </Card>
                </Grid>
              </Grid>
              <Card>
                <InputLabel shrink htmlFor="select-multiple-native">
                  Fecha/hora de grabación
                </InputLabel>
                <Controller
                  name="recorded_at"
                  control={control}
                  defaultValue={moment().format("YYYY-MM-DDTHH:mm")}
                  rules={{ required: true }}
                  render={({ field }) => <TextField
                    {...field}
                    type="datetime-local"
                    style={{ width: '100%' }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />}
                />
              </Card>
              <Card>
              <InputLabel shrink htmlFor="select-multiple-native">
                Categorías
              </InputLabel>
                <Controller
                  name="tags"
                  value={tags}
                  onChange={onTagChange}
                  control={control}
                  render={({ field }) => <Select
                  {...field}
                  closeMenuOnSelect={false}
                  label="Categorías"
                  components={animatedComponents}
                  defaultValue={[]}
                  placeholder={'Seleccione las categorías'}
                  formatGroupLabel={formatGroupLabel}
                  isMulti
                  options={taxonomyOptions}
                  styles={colourStyles}
                />}
              />
              </Card>
              <Card>
                <InputLabel shrink htmlFor="select-multiple-native">
                  Descripción
                </InputLabel>
                <Controller
                  name="description"
                  control={control}
                  defaultValue=""
                  value={description}
                  onChange={onDescriptionChange}
                  rules={{ required: true }}
                  render={({ field }) => <TextField
                    {...field}
                    inputRef={descriptionInput}
                    type="text"
                    multiline={true}
                    rows={3}
                    style={{ width: '100%' }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />}
                />
              </Card>
            </Stack>
          </form>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="default"
            style={{ height: "100%", width: "100%" }}
            type="submit"
            form="audioForm"
            size="large"
            disabled={!file || !position || loading}
            startIcon={<CloudUploadIcon />}>
            Enviar
          </Button>
        </Grid>
        { loading &&
          <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress size={34} color="inherit" />
          </Backdrop>  
        }
        <style jsx global>{`
          html,
          body {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
              Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </Grid>
    </div>
  );
}