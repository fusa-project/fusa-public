import { useState, useEffect, useRef, createRef } from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { TextField, Button, FormControlLabel, Checkbox, Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import GraphicEqRoundedIcon from '@material-ui/icons/GraphicEqRounded';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import dynamic from "next/dynamic";
import Head from "next/head";
import moment from 'moment';
import { useForm, Controller } from "react-hook-form";

const InputFile = styled('input')({
  display: 'none',
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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
  let tag_classes = ['car', 'dog', 'people']
  const [tags, setTags] = useState({
    car: false,
    dog: false,
    people: false,
  });

  const handleTagChange = (event) => {
    setTags({ ...tags, [event.target.id]: event.target.checked });
  };

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
                    label="Nombre de audio"
                    type="text"
                    style={{ width: '100%' }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />}
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
                <Controller
                  name="recorded_at"
                  control={control}
                  defaultValue={moment().format("YYYY-MM-DDTHH:mm")}
                  rules={{ required: true }}
                  render={({ field }) => <TextField
                    {...field}
                    label="Fecha/hora de grabación"
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
                {
                  tag_classes.map((class_name, index) => {
                    return (
                      <Controller
                        key={index}
                        name={'tags.' + class_name}
                        defaultValue={false}
                        control={control}
                        render={({ field }) => (
                          <FormControlLabel
                            control={
                              <Checkbox
                                {...field}
                                checked={tags[class_name]}
                                onChange={handleTagChange}
                                id={class_name}
                              />
                            }
                            label={capitalizeFirstLetter(class_name)}
                          />
                        )}
                      />
                    )
                  })
                }
              </Card>
              <Card>
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
                    label="Descripción"
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