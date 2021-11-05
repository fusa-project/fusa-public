import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Button
} from '@material-ui/core'
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered'
import { useState, forwardRef } from 'react'

const Transition = forwardRef(function Transition (props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const InstructionsDialogButton = () => {
  const [openInstructions, setOpenInstructions] = useState(false)
  const handleOpenInstructions = () => setOpenInstructions(true)
  const handleCloseInstructions = () => setOpenInstructions(false)
  return (
    <div>
      <Button
        variant='outlined'
        onClick={handleOpenInstructions}
        startIcon={<FormatListNumberedIcon />}
      >
        Instrucciones
      </Button>
      <InstructionsDialog
        openInstructions={openInstructions}
        handleCloseInstructions={handleCloseInstructions}
      />
    </div>
  )
}

const InstructionsDialog = ({ openInstructions, handleCloseInstructions }) => {
  return (
    <Dialog
      open={openInstructions}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseInstructions}
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle>{'Instrucciones de uso'}</DialogTitle>
      <DialogContent>
        <div className={'MuiTypography-body1 MuiTypography-colorTextSecondary'}>
          <ol>
            <li>Subir un archivo de audio.</li>
            <li>Ingresar el nombre de la grabación.</li>
            <li>
              Seleccionar un punto en el mapa donde fue realizada la grabación.
            </li>
            <li>Elegir el dispositivo de grabación utilizado.</li>
            <li>Indicar la fecha y hora de la grabación.</li>
            <li>
              <strong>[Opcional]</strong> Seleccionar las fuentes de audio que
              se encuentren en la grabación.
            </li>
            <li>
              <strong>[Opcional]</strong> Describir brevemente la grabación
              realizada.
            </li>
            <li>Enviar grabación.</li>
          </ol>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseInstructions}>Entendido</Button>
      </DialogActions>
    </Dialog>
  )
}
export default InstructionsDialogButton
