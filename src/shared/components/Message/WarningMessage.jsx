import { Message } from 'semantic-ui-react'

export const WarningMessage = (props) => (
  <Message
    warning
    header={'Внимание'}
    content={'Пожалуйста, проверьте введённые данные'}
    {...props}
  />
)