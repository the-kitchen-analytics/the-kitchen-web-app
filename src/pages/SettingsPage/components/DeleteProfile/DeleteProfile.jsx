import { Divider, Header, Message, Segment } from 'semantic-ui-react'
import { DeleteProfileForm } from './DeleteProfileForm'
import { useState } from 'react'
import { DeleteButton } from './DeleteButton.jsx'

const DangerMessage = (props) => (
  <Message
    negative
    header={'Внимание!'}
    content={'Ваш аккаунт и все сохранённые данные будут удалены без возможности восстановления. Вы не сможете больше пользоваться приложением.'}
    {...props}
  />
)

const InfoMessage = (props) => (
  <Message
    content={'Чтобы продолжить, введите адрес электронной почты от данного акаунта. После этого кнопка "Удалить" станет активной'}
    {...props}
  />
)

export const DeleteProfile = () => {
  const [displayForm, setDisplayForm] = useState(false)
  const handleDeleteButtonClick = () => setDisplayForm(true)

  const formWithMessage = (
    <>
      <Divider hidden />
      <InfoMessage />
      <DeleteProfileForm />
    </>
  )

  return (
    <Segment color={'red'}>
      <Header
        icon={'user delete'}
        content={'Удалить аккаунт'}
      />
      <DangerMessage />
      {
        displayForm
          ? formWithMessage
          : <DeleteButton onClick={handleDeleteButtonClick} />
      }
    </Segment>
  )
}