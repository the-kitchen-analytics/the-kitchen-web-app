import { Form } from 'semantic-ui-react'
import { useState } from 'react'
import { useTheme, useUserDetailsContext } from '../../../../hooks'
import { DeleteButton } from './DeleteButton'
import { deleteUser } from '../../../../services/authenticationService.js'

export const DeleteProfileForm = () => {
  const { size } = useTheme()
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [{ uid, email: currentUserEmail }] = useUserDetailsContext()

  const isDisabled = isLoading || email !== currentUserEmail

  const handleDeleteFormSubmit = (e) => {
    e.preventDefault()
    if (!isDisabled) {
      setIsLoading(true)
      deleteUser(uid)
    }
  }

  return (
    <Form
      size={size}
      loading={isLoading}
      onSubmit={handleDeleteFormSubmit}
    >
      <Form.Input
        required
        error
        label={'Введите email'}
        type={'email'}
        name={'email'}
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        placeholder={'user@example.com'}
      />

      <Form.Field>
        <DeleteButton
          type={'submit'}
          disabled={isDisabled}
          loading={isLoading}
        />
      </Form.Field>
    </Form>
  )
}