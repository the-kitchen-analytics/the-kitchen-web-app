import { Message } from 'semantic-ui-react'

export const ErrorMessage = ({ message }) => (
  <Message
    error
    header="Произошла ошибка."
    content={message || 'Пожалуйста, проверьте введённые данные и повторите попытку.'}
  />
)