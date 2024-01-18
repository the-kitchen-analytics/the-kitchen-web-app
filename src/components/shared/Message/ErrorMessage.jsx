import { Message } from 'semantic-ui-react'

export const ErrorMessage = (props) => (
  <Message
    error
    header={'Произошла ошибка'}
    content={'Пожалуйста, проверьте введённые данные и повторите попытку'}
    {...props}
  />
)