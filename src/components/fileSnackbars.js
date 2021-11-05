import AlertSnackBar from '@components/alertSnackbar'

const FileSnackbars = ({
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
          'Formato de archivo inválido, debe ser un archivo de audio. Formatos válidos: WAV - MP3 - AIFF'
        }
      />
      <AlertSnackBar
        open={openLongWarn}
        handleClose={handleCloseLongWarn}
        type={'warning'}
        alertMessage={
          'Archivo de audio demasiado largo. La duración máxima es de 60 segundos.'
        }
      />
    </div>
  )
}

export default FileSnackbars
