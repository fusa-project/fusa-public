import styled from 'styled-components'
import { useField } from 'formik'
import Card from '@components/card'
import { InputLabel, TextField } from '@material-ui/core'

const ErrorMessage = styled.div`
  color: #f00;
`

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <Card>
      <InputLabel shrink>{label}</InputLabel>
      <TextField
        {...field}
        {...props}
        style={{ width: '100%' }}
        InputLabelProps={{
          shrink: true
        }}
        variant='outlined'
      />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </Card>
  )
}

export default Input
