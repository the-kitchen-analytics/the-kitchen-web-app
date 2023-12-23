import { Link } from 'react-router-dom'
import { Button, Divider, Form } from 'semantic-ui-react'
import { LoadableButton } from '../../components/shared'
import { handleInputChange } from '../../utils'
import { REGISTER, RESET_PASSWORD } from '../../data/routePaths'

const LoginForm = ({
  formData: { email, password },
  setFormData,
  handleLoginWithEmailAndPassword,
  isLoading,
  error
}) => {
  const shouldDisableSubmitButton = () => {
    return isLoading || !(email && password)
  }

  const handleInputChangeWrapper = (e) => {
    handleInputChange(e, setFormData)
  }

  return (
    <Form
      size="large"
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
        <LoadableButton
          fluid
          loading={isLoading}
          disabled={shouldDisableSubmitButton()}
          icon="sign in"
          type="submit"
          onClick={handleLoginWithEmailAndPassword}
          content="Войти"
          size="large"
        />
      </Form.Field>

      <Divider />

      <Form.Field>
        <Link to={RESET_PASSWORD}>
          Забыли пароль?
        </Link>
      </Form.Field>

      <Form.Field>
        <Link to={REGISTER}>
          <Button
            as="a"
            fluid
            positive
            disabled={isLoading}
            content="Зарегистрироваться"
            size="large"
          />
        </Link>
      </Form.Field>

    </Form>
  )
}

export default LoginForm