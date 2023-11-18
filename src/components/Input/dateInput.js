import styled from 'styled-components'
import { useField, useFormikContext } from 'formik'
import Card from '@components/card'
import { InputLabel, TextField } from '@material-ui/core'

const Label = styled.label`
  color: #000;
  display: block;
  margin-bottom: 5px;
`
const MyDateInput = styled.input`
    outline: none;
    padding: 8px;
    border: solid 1px #b1b3b5
    border-radius: 4px;
    text-align: center;
    width: 100%;
    margin-bottom: 5px;
`
const ErrorMessage = styled.div`
  color: #f00;
`

function getPeriodByDate(dateTimeString) {
  const date = new Date(dateTimeString);
  const hours = date.getHours();

  if (hours >= 7 && hours <= 22) {
    return 'day';
  } else {
    return 'night';
  }
}

const DateInput = ({ label, ...props }) => {
  const formContext = useFormikContext()
  const [field, meta, helpers] = useField(props)
  const handleChange = (event) => {
    helpers.setValue(event.target.value);
    const indicator = getPeriodByDate(event.target.value);
    formContext.setFieldValue('period', indicator);
    console.log(indicator)
  };

  return (
    <Card>
      <InputLabel shrink>{label}</InputLabel>
      <TextField
        {...field}
        {...props}
        type='datetime-local'
        style={{ width: '100%' }}
        InputLabelProps={{
          shrink: true
        }}
        variant='outlined'
        onChange={handleChange}
      />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </Card>
  )
}

export default DateInput
