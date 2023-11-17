import AudioFileSnackbar from '@components/audioFileSnackbar'
import styled from 'styled-components'
import { useField, useFormikContext } from 'formik'
import Card from '@components/card'
import AudioPlayer from '@components/Input/audioPlayer'
import GraphicEqRoundedIcon from '@material-ui/icons/GraphicEqRounded'
import { Button } from '@material-ui/core'
import { useState, useRef } from 'react'

const MyFileInput = styled.input`
  display: none;
`
const ErrorMessage = styled.div`
  color: #f00;
`
const inputAudio = (
  event,
  setAudio,
  setOpenLongWarn,
  setOpenFormatWarn,
  formContext,
  audioRef
) => {
  if (event.target.files && event.target.files[0]) {
    const selectedFile = event.target.files[0]
    var file_type = selectedFile.type.split('/')[0]

    if (file_type == 'audio') {
      var reader = new FileReader()
      reader.readAsDataURL(selectedFile)
      const audio_object = URL.createObjectURL(selectedFile)
      reader.onload = function (e) {
        var media = new Audio(reader.result)
        media.onloadedmetadata = function () {
          var audio_duration = media.duration

          if (audio_duration >= 10 && audio_duration <= 60) {
            formContext.setFieldValue('name', selectedFile.name)
            formContext.setFieldValue('audio.data', e.target.result)
            formContext.setFieldValue('audio.size', selectedFile.size)
            formContext.setFieldValue('audio.format', selectedFile.type)
            formContext.setFieldValue('audio.duration', audio_duration)
            setAudio(audio_object)
            if (audioRef.current) {
              audioRef.current.pause()
              audioRef.current.load()
            }
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

const AudioFileInput = ({ label, ...props }) => {
  const formContext = useFormikContext()
  const [audio, setAudio] = useState()
  const [field] = useField(props)
  const [openLongWarn, setOpenLongWarn] = useState(false)
  const [openFormatWarn, setOpenFormatWarn] = useState(false)
  const audioRef = useRef()

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
      <AudioFileSnackbar
        openLongWarn={openLongWarn}
        handleCloseLongWarn={handleCloseLongWarn}
        openFormatWarn={openFormatWarn}
        handleCloseFormatWarn={handleCloseFormatWarn}
      />
      <Card>
        <label htmlFor='audio.data'>
          <MyFileInput
            {...field}
            {...props}
            id='audio.data'
            type='file'
            accept='audio/*'
            value={undefined}
            onChange={event =>
              inputAudio(
                event,
                setAudio,
                setOpenLongWarn,
                setOpenFormatWarn,
                formContext,
                audioRef
              )
            }
          />
          <Button
            variant='contained'
            component='span'
            startIcon={<GraphicEqRoundedIcon />}
          >
            Subir audio
          </Button>
        </label>
      </Card>

      <div>
        {audio && (
          <Card>
            <AudioPlayer audio={audio} audioRef={audioRef} />
          </Card>
        )}
      </div>
    </div>
  )
}

export default AudioFileInput