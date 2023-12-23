import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { handleInputChange } from '../../utils'
import { REGISTER } from '../../data/routePaths'

export const ResetPasswordForm = (props) => {

  const {
    formData: { email },
    setFormData,
    handlePasswordReset,
    isLoading,
    error,
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

      <Form.Button
        fluid
        size="large"
        positive
        icon="send"
        content="Отправить"
        type="submit"
        loading={isLoading}
        disabled={isLoading || !email}
      />

      <Form.Field>
        <div>
          Нет аккаута? <Link to={REGISTER}>Зарегистрироваться</Link>.
        </div>
      </Form.Field>
    </Form>
  )
}