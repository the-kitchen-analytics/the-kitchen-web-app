import { Form } from 'semantic-ui-react'
import { useTheme } from '../../hooks'
import './DatePicker.css'

export const DatePicker = ({ handleChange, ...props }) => {
  const theme = useTheme()

  return (
    <Form.Input
      type={'date'}
      onChange={handleChange}
      icon={'calendar outline'}
      {...theme}
      {...props}
    />
  )
}