import AlertSnackBar from '@components/alertSnackbar'

const generalSnackbars = ({
  openSuccess,
  handleCloseSuccess,
  openFailed,
  handleCloseFailed
}) => {
  return (
    <div>
      <AlertSnackBar
        open={openSuccess}
        handleClose={handleCloseSuccess}
        type={'success'}
        alertMessage={'Archivo de audio enviado con éxito.'}
      />
      <AlertSnackBar
        open={openFailed}
        handleClose={handleCloseFailed}
        type={'error'}
        alertTitle={'Error de servidor'}
        alertMessage={`HTTP server error. Vuelva a intentarlo más tarde.`}
      />
    </div>
  )
}

export default generalSnackbars
