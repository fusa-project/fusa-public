import AlertSnackBar from '@components/alertSnackbar'

const AudioFileSnackbars = ({
  openLongWarn,
  handleCloseLongWarn,
  openFormatWarn,
  handleCloseFormatWarn
}) => {
  return (
    <div>
      <AlertSnackBar
        open={openFormatWarn}
        handleClose={handleCloseFormatWarn}
        type={'warning'}
        alertMessage={
          'Formato de audio inválido. Formatos válidos: WAV - MP3 - AIFF'
        }
      />
      <AlertSnackBar
        open={openLongWarn}
        handleClose={handleCloseLongWarn}
        type={'warning'}
        alertMessage={
          'El audio debe durar entre 10 y 60 segundos.'
        }
      />
    </div>
  )
}

export default AudioFileSnackbars