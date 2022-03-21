import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Button
} from '@material-ui/core'
import { forwardRef } from 'react'
import { fusa_taxonomy } from '@data/fusa_taxonomy'

const Transition = forwardRef(function Transition (props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const Probability = ({ value }) => {
  var percentage = (value * 100).toFixed(2)
  return percentage
}

const ModelOutputList = ({ modelOutput }) => {
  return Object.keys(modelOutput).length !== 0
    ? Object.entries(modelOutput).map(([key, prob], i) => {
        return (
          <li key={i}>
            <strong>{fusa_taxonomy[key]['description']}</strong> : {' '}
            <Probability value={prob} /> %
          </li>
        )
      })
    : null
}

const ClassificationDialog = ({
  openSuccess,
  handleCloseSuccess,
  modelOutput
}) => {
  return (
    <Dialog
      open={openSuccess}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseSuccess}
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle>{'Clasificación del modelo'}</DialogTitle>
      <DialogContent>
        <div className={'MuiTypography-body1 MuiTypography-colorTextSecondary'}>
          <p>
            FuSA ha identificado las probables siguientes fuentes sonoras
            ambientales del audio enviado:
          </p>
          <ol>
            <ModelOutputList modelOutput={modelOutput} />
          </ol>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseSuccess}>Entendido</Button>
      </DialogActions>
    </Dialog>
  )
}
export default ClassificationDialog
