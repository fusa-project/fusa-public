import styled from 'styled-components'
import { useField, useFormikContext } from 'formik'
import Card from '@components/card'
import {
  InputLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Button
} from '@material-ui/core'
import { useState, forwardRef, useEffect } from 'react'
import { taxonomyOptions } from '@data/taxonomy'

const Transition = forwardRef(function Transition (props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const TypeContainer = styled.div`
  margin-bottom: 30px;
`

const TypeLabel = styled.label`
  color: #000;
  display: block;
  margin-bottom: 10px;
  font-size: 20px;
  text-align: left;
`

const MyCheckboxInput = styled.input`
    border: solid 1px #b1b3b5
    border-radius: 4px;
    width: 50px;
`
const CheckboxLabel = styled.label`
  width: 200px;
`

const TagsDialog = ({
  field,
  props,
  openTags,
  handleCloseTags,
  handleDismissTags,
  checkedTags
}) => {
  return (
    <Dialog
      open={openTags}
      TransitionComponent={Transition}
      onClose={handleDismissTags}
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle>
        {'Seleccione las fuentes sonoras existentes en el audio'}
      </DialogTitle>
      <DialogContent>
        {taxonomyOptions.map((type, i) => {
          return (
            <TypeContainer key={i}>
              <TypeLabel>{type.label}</TypeLabel>
              {type.options.map((option, j) => {
                const checked = checkedTags.includes(option.value)
                return (
                  <div key={j}>
                    <CheckboxLabel htmlFor={option.label}>
                      {option.label}
                    </CheckboxLabel>
                    <MyCheckboxInput
                      {...field}
                      {...props}
                      type='checkbox'
                      value={option.value}
                      defaultChecked={checked}
                    />
                  </div>
                )
              })}
            </TypeContainer>
          )
        })}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDismissTags}>Cancelar</Button>
        <Button onClick={handleCloseTags}>Guardar</Button>
      </DialogActions>
    </Dialog>
  )
}

const CheckboxInput = ({ label, ...props }) => {
  const formContext = useFormikContext()
  const [field, meta] = useField(props)
  const [openTags, setOpenTags] = useState(false)
  const [checkedTags, setCheckedTags] = useState([])

  useEffect(() => {
    if (formContext.isSubmitting) {
      setCheckedTags([])
    }
  }, [formContext.isSubmitting])

  const handleOpenTags = () => {
    setOpenTags(true)
  }
  const handleCloseTags = () => {
    setOpenTags(false)
    setCheckedTags(field.value)
  }
  const handleDismissTags = () => {
    setOpenTags(false)
  }
  return (
    <div>
      <Card>
        <InputLabel shrink>{label}</InputLabel>
        <Button variant='contained' component='span' onClick={handleOpenTags}>
          Seleccionar fuentes sonoras
        </Button>
      </Card>

      <TagsDialog
        field={field}
        props={props}
        openTags={openTags}
        handleCloseTags={handleCloseTags}
        handleDismissTags={handleDismissTags}
        checkedTags={checkedTags}
      />
    </div>
  )
}

export default CheckboxInput
