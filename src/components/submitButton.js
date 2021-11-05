import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { Button } from '@material-ui/core'

const SubmitButton = ({ onClick }) => {
  return (
    <Button
      variant='contained'
      color='default'
      style={{ height: '100%', width: '100%' }}
      type='submit'
      form='audioForm'
      size='large'
      onClick={onClick}
      startIcon={<CloudUploadIcon />}
    >
      Enviar
    </Button>
  )
}

export default SubmitButton
