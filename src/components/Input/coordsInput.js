import styled from 'styled-components'
import { useField, useFormikContext } from 'formik'
import Card from '@components/card'
import { InputLabel, TextField } from '@material-ui/core'
import { useEffect } from 'react'

const ErrorMessage = styled.div`
  color: #f00;
`

const CoordsInput = ({ label, ...props }) => {
  const formikProps = useFormikContext()
  const [field, meta] = useField(props)
  useEffect(() => {
    formikProps.setFieldValue(props.name, props.values)
  }, [props.values])
  return (
    <Card>
      <InputLabel shrink>{label}</InputLabel>
      <TextField
        {...field}
        {...props}
        InputProps={{
          readOnly: true
        }}
        type='number'
        style={{ width: '100%' }}
        variant='outlined'
      />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </Card>
  )
}

export default CoordsInput
