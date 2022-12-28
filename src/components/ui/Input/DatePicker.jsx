import { Form } from 'semantic-ui-react'
import { useTouched } from '../../../hooks'

const DatePicker = ({ value, label, name, handleChange, required = false, isInvalid = false }) => {

  const { isTouched, handleInputChangeWrapper } = useTouched(handleChange)

  return (
    <Form.Input
      label={label}
      name={name}
      type="date"
      value={value}
      required={required}
      error={isInvalid && isTouched}
      onChange={handleInputChangeWrapper}
    />
  )
}

export default DatePicker