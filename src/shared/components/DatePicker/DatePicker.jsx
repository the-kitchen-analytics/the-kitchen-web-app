import { Form } from 'semantic-ui-react'
import { useTheme } from '../../hooks'

export const DatePicker = ({ handleChange, ...props }) => {
  const theme = useTheme()

  return (
    <Form.Input
      type={'date'}
      onChange={handleChange}
      {...theme}
      {...props}
    />
  )
}