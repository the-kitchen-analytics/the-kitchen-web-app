import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from 'semantic-ui-react'
import { useTheme } from '../../../../shared/hooks'
import { DeleteButton } from './DeleteButton'
import { deleteCurrentUserAndRelatedData } from '../../../../domain/app'
import { HOME_PATH, RESET_PASSWORD_PATH } from '../../../../router'
import { DefaultButton } from '../../../../shared/components'

const WRONG_PASSWORD_ERROR = {
  content: 'Введён неверный пароль',
  pointing: 'below'
}

export const DeleteProfileForm = () => {
  const { size } = useTheme()
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const isDisabled = isLoading || !password

  const handleDeleteFormSubmit = async (e) => {
    e.preventDefault()

    if (!isDisabled) {
      setError(false)
      setIsLoading(true)

      try {
        await deleteCurrentUserAndRelatedData(password)
        setIsLoading(false)
        navigate(HOME_PATH)

      } catch (e) {
        setError(true)

      } finally {
        setIsLoading(false)
      }
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
        autoComplete="current-password"
        label={'Текущий пароль'}
        type={'password'}
        name={'password'}
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        placeholder={'Введите пароль'}
        error={error ? WRONG_PASSWORD_ERROR : null}
      />

      {
        error && (
          <Form.Field>
            <DefaultButton
              as={Link}
              to={RESET_PASSWORD_PATH}
              content={'Восстановить пароль'}
              fluid
              basic
              icon={'redo'}
            />
          </Form.Field>
        )
      }

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