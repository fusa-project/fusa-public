import FileSnackbars from '@components/fileSnackbars'
import styled from 'styled-components'
import { useField, useFormikContext } from 'formik'
import Card from '@components/card'
import AudioPlayer from '@components/Input/audioPlayer'
import GraphicEqRoundedIcon from '@material-ui/icons/GraphicEqRounded'
import { Button } from '@material-ui/core'
import { useState } from 'react'

const MyFileInput = styled.input`
  display: none;
`
const ErrorMessage = styled.div`
  color: #f00;
`
const inputAudio = (
  event,
  setAudio,
  setFile,
  setOpenLongWarn,
  setOpenFormatWarn,
  formContext
) => {
  if (event.target.files && event.target.files[0]) {
    const i = event.target.files[0]
    var file_type = i.type.split('/')[0]
    if (file_type == 'audio') {
      var reader = new FileReader()
      reader.readAsDataURL(i)
      const audio_object = URL.createObjectURL(i)
      reader.onload = function (e) {
        var media = new Audio(reader.result)
        media.onloadedmetadata = function () {
          var audio_duration = media.duration
          if (audio_duration <= 60) {
            formContext.setFieldValue('name', i.name)
            formContext.setFieldValue('data', e.target.result)
            formContext.setFieldValue('file', i)
            setAudio(audio_object)
            setFile(i)
          } else {
            setOpenLongWarn(true)
          }
        }
      }
    } else {
      setOpenFormatWarn(true)
    }
  }
}

const FileInput = ({ label, ...props }) => {
  const formContext = useFormikContext()
  const [file, setFile] = useState()
  const [audio, setAudio] = useState()
  const [field, meta] = useField(props)
  const [openLongWarn, setOpenLongWarn] = useState(false)
  const [openFormatWarn, setOpenFormatWarn] = useState(false)
  const handleCloseLongWarn = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenLongWarn(false)
  }
  const handleCloseFormatWarn = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenFormatWarn(false)
  }
  
  return (
    <div>
      <FileSnackbars
        openLongWarn={openLongWarn}
        handleCloseLongWarn={handleCloseLongWarn}
        openFormatWarn={openFormatWarn}
        handleCloseFormatWarn={handleCloseFormatWarn}
      />
      <Card>
        <label htmlFor='audioFile'>
          <MyFileInput
            {...field}
            {...props}
            id='audioFile'
            type='file'
            accept='audio/*'
            value={undefined}
            onChange={event =>
              inputAudio(
                event,
                setAudio,
                setFile,
                setOpenLongWarn,
                setOpenFormatWarn,
                formContext
              )
            }
          />
          <Button
            variant='contained'
            component='span'
            startIcon={<GraphicEqRoundedIcon />}
          >
            Subir archivo
          </Button>
        </label>
      </Card>
      <div>
        {file && (
          <p style={{ textAlign: 'center', marginBottom: -20 }}>
            <b>Archivo: </b> {file.name}{' '}
          </p>
        )}
        {audio && (
          <Card>
            <AudioPlayer audio={audio} />
          </Card>
        )}
      </div>
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </div>
  )
}

export default FileInput
