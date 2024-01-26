import { Form } from 'semantic-ui-react'

export const DatePicker = ({ handleChange, ...props }) => (
  <Form.Input
    type={'date'}
    onChange={handleChange}
    {...props}
  />
)
