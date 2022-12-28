import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useApplicationSettings } from '../../hooks'
import { handleInputChange } from '../../utils/ui/form'
import { REGISTER } from '../../data/routePaths'

const ResetPasswordForm = ({
  formData: { email },
  setFormData,
  handlePasswordReset,
  isLoading,
  error,
}) => {

  const { settings: { controlsSize } } = useApplicationSettings()

  const handleInputChangeWrapper = (e) => {
    handleInputChange(e, setFormData)
  }

  return (
    <Form
      error={!!error}
      loading={isLoading}
      size={controlsSize}
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
        size={controlsSize}
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

export default ResetPasswordForm