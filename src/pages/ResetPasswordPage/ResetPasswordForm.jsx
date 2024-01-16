import { Button, Divider, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { handleInputChange } from '../../utils'
import { REGISTER } from '../../data/routePaths'
import { SubmitButton } from '../../components/shared/index.js'

export const ResetPasswordForm = (props) => {

  const {
    formData: { email },
    setFormData,
    handlePasswordReset,
    isLoading,
    error
  } = props
  const handleInputChangeWrapper = (e) => {
    handleInputChange(e, setFormData)
  }

  return (
    <Form
      error={!!error}
      loading={isLoading}
      size="large"
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
          size={'large'}
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
        <Button
          as={Link}
          to={REGISTER}
          fluid
          basic
          disabled={isLoading}
          content="Зарегистрироваться"
          size="large"
        />
      </Form.Field>
    </Form>
  )
}