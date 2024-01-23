import { Message } from 'semantic-ui-react'

export const SuccessMessage = (props) => (
  <Message
    positive
    icon={'check circle'}
    content={props.content}
    {...props}
  />
)