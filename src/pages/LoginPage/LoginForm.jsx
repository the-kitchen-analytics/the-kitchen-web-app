import { Link } from 'react-router-dom'
import { Divider, Form } from 'semantic-ui-react'
import { DefaultButton, SubmitButton } from '../../components/shared'
import { handleInputChange } from '../../utils'
import { REGISTER, RESET_PASSWORD } from '../../data/routePaths'
import { useTheme } from '../../hooks'

export const LoginForm = (props) => {
  const {
    formData: { email, password },
    setFormData,
    handleLoginWithEmailAndPassword,
    isLoading,
    error
  } = props

  const { size } = useTheme()

  const shouldDisableSubmitButton = () => {
    return isLoading || !(email && password)
  }

  const handleInputChangeWrapper = (e) => {
    handleInputChange(e, setFormData)
  }

  return (
    <Form
      size={size}
      error={error}
      loading={isLoading}
      onSubmit={handleLoginWithEmailAndPassword}
    >
      <Form.Field>
        <Form.Input
          icon="at"
          iconPosition="left"
          label="Электронная почта"
          name="email"
          value={email}
          onChange={handleInputChangeWrapper}
          placeholder="Эл. почта"
          autoComplete="email"
        />
      </Form.Field>

      <Form.Field>
        <Form.Input
          icon="key"
          iconPosition="left"
          label="Пароль"
          type="password"
          name="password"
          value={password}
          onChange={handleInputChangeWrapper}
          placeholder="Пароль"
          autoComplete="current-password"
        />
      </Form.Field>

      <Form.Field>
        <SubmitButton
          fluid
          loading={isLoading}
          disabled={shouldDisableSubmitButton()}
          onClick={handleLoginWithEmailAndPassword}
          content={'Войти'}
        />
      </Form.Field>

      <Divider hidden />

      <Form.Field>
        <Link to={RESET_PASSWORD}>
          Забыли пароль?
        </Link>
      </Form.Field>

      <Form.Field>
        <DefaultButton
          as={Link}
          to={REGISTER}
          fluid
          basic
          disabled={isLoading}
          content={'Зарегистрироваться'}
        />
      </Form.Field>
    </Form>
  )
}