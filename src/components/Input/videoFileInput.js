import VideoFileSnackbar from '@components/videoFileSnackbar'
import styled from 'styled-components'
import { useField, useFormikContext } from 'formik'
import Card from '@components/card'
import VideoPlayer from '@components/Input/videoPlayer'
import VideocamIcon from '@material-ui/icons/Videocam'
import { Button } from '@material-ui/core'
import { useState, useEffect, useRef } from 'react'

const MyFileInput = styled.input`
  display: none;
`
const ErrorMessage = styled.div`
  color: #f00;
`
const inputVideo = (
  event,
  setVideo,
  setOpenLongWarn,
  setOpenFormatWarn,
  formContext,
  videoRef
) => {
  if (event.target.files && event.target.files[0]) {
    const selectedFile = event.target.files[0];

    var file_type = selectedFile.type.split('/')[0];

    if (file_type === 'video') {
      var reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      const video_object = URL.createObjectURL(selectedFile);

      reader.onload = function (e) {
        var media = document.createElement('video');
        media.src = reader.result;

        media.onloadedmetadata = function () {
          var videoDuration = media.duration;
          if (videoDuration >= 10 && videoDuration <= 60) {
            formContext.setFieldValue('name', selectedFile.name);
            formContext.setFieldValue('video.data', e.target.result);
            formContext.setFieldValue('video.size', selectedFile.size)
            formContext.setFieldValue('video.format', selectedFile.type)
            formContext.setFieldValue('video.duration', videoDuration);
            setVideo(video_object)

            if (videoRef.current) {
              videoRef.current.pause()
              videoRef.current.load()
            }

          } else {
            setOpenLongWarn(true);
          }
          media.oncanplaythrough = function () {
            console.log(media.webkitAudioDecodedByteCount);
          };
        };
      };

    } else {
      setOpenFormatWarn(true);
    }
  }
}

const VideoFileInput = ({ label, ...props }) => {
  const formContext = useFormikContext()
  const [video, setVideo] = useState()
  const [field, meta] = useField(props)
  const [openLongWarn, setOpenLongWarn] = useState(false)
  const [openFormatWarn, setOpenFormatWarn] = useState(false)
  const videoRef = useRef()

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
      <VideoFileSnackbar
        openLongWarn={openLongWarn}
        handleCloseLongWarn={handleCloseLongWarn}
        openFormatWarn={openFormatWarn}
        handleCloseFormatWarn={handleCloseFormatWarn}
      />
      <Card>
        <label htmlFor='video.data'>
          <MyFileInput
            {...field}
            {...props}
            id='video.data'
            type='file'
            accept='video/*'
            value={undefined}
            onChange={event =>
              inputVideo(
                event,
                setVideo,
                setOpenLongWarn,
                setOpenFormatWarn,
                formContext,
                videoRef
              )
            }
          />
          <Button
            variant='contained'
            component='span'
            startIcon={<VideocamIcon />}
          >
            Subir video
          </Button>
        </label>
      </Card>
      <div>
        {video && (
          <Card>
            <VideoPlayer video={video} videoRef={videoRef} />
          </Card>
        )}
      </div>
    </div>
  )
}

export default VideoFileInput