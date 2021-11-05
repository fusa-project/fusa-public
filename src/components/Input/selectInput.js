import { useField } from 'formik'
import Card from '@components/card'
import { InputLabel, Select, MenuItem } from '@material-ui/core'

const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <Card>
      <InputLabel shrink>{label}</InputLabel>
      <Select
        {...field}
        {...props}
        style={{ width: '100%' }}
        variant='outlined'
      >
        <MenuItem value={'smartphone'}>Teléfono celular</MenuItem>
        <MenuItem value={'sonometer'}>Sonómetro</MenuItem>
      </Select>
    </Card>
  )
}

export default SelectInput
