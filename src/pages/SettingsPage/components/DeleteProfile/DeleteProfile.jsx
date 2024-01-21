import { Header, Message, Segment } from 'semantic-ui-react'
import { DeleteProfileForm } from './DeleteProfileForm'
import { useState } from 'react'
import { DeleteButton } from './DeleteButton'

const DangerMessage = (props) => (
  <Message
    negative
    header={'Внимание!'}
    content={'Ваш аккаунт и все связанные с ним данные будут удалены без возможности восстановления. Вы больше не сможете пользоваться приложением'}
    {...props}
  />
)

const InfoMessage = (props) => (
  <Message
    content={'Чтобы продолжить, введите пароль от Вашего акаунта'}
    {...props}
  />
)

export const DeleteProfile = () => {
  const [displayForm, setDisplayForm] = useState(false)
  const handleDeleteButtonClick = () => setDisplayForm(true)

  const formWithMessage = (
    <>
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