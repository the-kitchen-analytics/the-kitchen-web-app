import { Divider, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { handleInputChange } from '../../shared/utils'
import { REGISTER_PATH } from '../../data/routePaths'
import { DefaultButton, SubmitButton } from '../../shared/components'
import { useTheme } from '../../shared/hooks'

export const ResetPasswordForm = (props) => {

  const {
    formData: { email },
    setFormData,
    handlePasswordReset,
    isLoading,
    error
  } = props

  const { size } = useTheme()

  const handleInputChangeWrapper = (e) => {
    handleInputChange(e, setFormData)
  }

  return (
    <Form
      error={!!error}
      loading={isLoading}
      size={size}
      onSubmit={handlePasswordReset}
    >
      <Form.Input
        icon="at"
        iconPosition="left"
        label="Электронная почта"
        placeholder="Эл. Почта"
        type="email"
        name="email"
        value={email}
        onChange={handleInputChangeWrapper}
      />

      <Form.Field>
        <SubmitButton
          fluid
          content={'Отправить'}
          loading={isLoading}
          disabled={isLoading || !email}
        />
      </Form.Field>

      <Divider hidden />

      <Form.Field>
        Нет аккаута?
      </Form.Field>

      <Form.Field>
        <DefaultButton
          as={Link}
          to={REGISTER_PATH}
          fluid
          basic
          disabled={isLoading}
          content="Зарегистрироваться"
        />
      </Form.Field>
    </Form>
  )
}