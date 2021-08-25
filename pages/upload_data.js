import { useState, useEffect, useRef, createRef } from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import Select from 'react-select';
import { TextField, Button, FormControlLabel, Checkbox, Grid, Select as MaterialSelect, MenuItem, InputLabel } from '@material-ui/core';
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

const animatedComponents = makeAnimated();

const InputFile = styled('input')({
  display: 'none',
});

const MapWithNoSSR = dynamic(() => import("../components/geopositionData").then((v) => v.Map), {
  ssr: false,
});

export default function FormPage(props) {

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
  const [recording_device, setRecordingDevice] = useState('');

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

  //Audio file
  const [file, setFile] = useState();
  const [audio, setAudio] = useState();

  const uploadAudio = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setAudio(URL.createObjectURL(i))
      setFile(i);
    }
  };

  //Audio data
  const [audioData, setAudioData] = useState({
    name: '',
    format: '',
    size: '',
    duration: '',
    recorded_at: '',
    uploaded_at: '',
    latitude: '',
    longitude: '',
    data: '',
    tags: '',
    has_parent: '',
    parent: ''
  })

  const { control, handleSubmit, reset, formState, formState: { isSubmitSuccessful } } = useForm();

  const onSubmit = data => {
    try {
      var duration = document.getElementById("audio_tag").duration
      setAudioData({
        name: data.name,
        format: file.type,
        size: file.size,
        duration: duration,
        recorded_at: moment(data.recorded_at).unix(),
        uploaded_at: moment().unix(),
        latitude: data.latitude,
        longitude: data.longitude,
        tags: data.tags,
      })
      console.log(data)
      console.log(audioData)
      setName('')
      setDescription('')
      setTags({
        car: false,
        dog: false,
        people: false,
      })
      setPosition({})
      setFile()
      setAudio()
      document.getElementById("audioFile").value = "";
      reset()
    }
    catch (e) {
      console.log(e)
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
                  defaultValue=""
                  control={control}
                  render={({ field }) => <MaterialSelect 
                    {...field}
                    value={recording_device}
                    onChange={onRecordingDeviceChanged}
                    style={{ width: '100%' }}
                    variant="outlined"
                    >
                    <MenuItem value={"cellphone"}>Teléfono celular</MenuItem>
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
              <Select
                value={tags}
                onChange={onTagChange}
                closeMenuOnSelect={false}
                label="Categorías"
                components={animatedComponents}
                defaultValue={[]}
                placeholder={'Seleccione las categorías'}
                formatGroupLabel={formatGroupLabel}
                isMulti
                options={taxonomyOptions}
                styles={colourStyles}
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
            disabled
            startIcon={<CloudUploadIcon />}>
            Enviar
          </Button>
        </Grid>
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