import AlertSnackBar from '@components/alertSnackbar'

const VideoFileSnackbar = ({
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
          'Formato de video inválido. Formatos válidos: ?? - ?? - ??'
        }
      />
      <AlertSnackBar
        open={openLongWarn}
        handleClose={handleCloseLongWarn}
        type={'warning'}
        alertMessage={
          'El video debe durar entre 10 y 60 segundos.'
        }
      />
    </div>
  )
}

export default VideoFileSnackbar
