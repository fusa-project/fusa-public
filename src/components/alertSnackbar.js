import { Snackbar } from '@material-ui/core'
import { AlertTitle } from '@material-ui/lab'
import MuiAlert from '@material-ui/lab/Alert'

const Alert = props => {
  return <MuiAlert elevation={6} {...props} />
}

const AlertSnackbar = ({
  open,
  handleClose,
  type,
  alertTitle,
  alertMessage
}) => {
  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={type}>
        {alertTitle && <AlertTitle>{alertTitle}</AlertTitle>}
        {alertMessage}
      </Alert>
    </Snackbar>
  )
}

export default AlertSnackbar
