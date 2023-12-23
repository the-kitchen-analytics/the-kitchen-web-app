import { Form } from 'semantic-ui-react'
import { useTouched } from '../../../hooks'

export const DatePicker = (props) => {
  
  const { value, label, name, handleChange, required = false, isInvalid = false } = props
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