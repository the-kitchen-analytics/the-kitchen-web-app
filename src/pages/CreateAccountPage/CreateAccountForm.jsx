import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'semantic-ui-react'
import { DefaultButton, SubmitButton, WorkerCategorySelect } from '../../shared/components'
import { handleInputChange } from '../../shared/utils'
import { LOGIN_PATH } from '../../router'
import { useTheme } from '../../shared/hooks'

export const CreateAccountForm = (props) => {

  const {
    formData: { name, email, password, workerCategory },
    setFormData,
    isLoading,
    error,
    handleRegisterWithMailAndPassword
  } = props

  const { size } = useTheme()

  const handleInputChangeWrapper = useCallback((e) => {
    handleInputChange(e, setFormData)
  }, [setFormData])

  const shouldDisableSubmitButton = () => {
    return isLoading || !(name && email && password && workerCategory)
  }

  const handleWorkerCategoryChange = (e, { value: workerCategory }) => {
    setFormData(prev => ({
      ...prev,
      workerCategory
    }))
  }

  return (
    <Form
      error={!!error}
      size={size}
      onSubmit={handleRegisterWithMailAndPassword}
      loading={isLoading}
    >
      <Form.Input
        required
        error={!!error}
        type="text"
        label="Имя"
        placeholder="Имя"
        name="name"
        value={name}
        onChange={handleInputChangeWrapper}
      />

      <Form.Input
        required
        error={!!error}
        type="email"
        label="Эл. почта"
        placeholder="Эл. почта"
        name="email"
        autoComplete="email"
        value={email}
        onChange={handleInputChangeWrapper}
      />

      <Form.Input
        required
        error={!!error}
        type="password"
        label="Пароль"
        placeholder="Пароль"
        name="password"
        autoComplete="new-password"
        value={password}
        onChange={handleInputChangeWrapper}
      />

      <WorkerCategorySelect
        value={workerCategory}
        handleChange={handleWorkerCategoryChange}
      />

      <Form.Field>
        <SubmitButton
          fluid
          content={'Зарегистрироваться'}
          loading={isLoading}
          disabled={shouldDisableSubmitButton()}
        />
      </Form.Field>

      <Form.Field>
        Уже есть аккаунт?
      </Form.Field>

      <Form.Field>
        <DefaultButton
          as={Link}
          to={LOGIN_PATH}
          fluid
          basic
          disabled={isLoading}
          content={'Войти'}
        />
      </Form.Field>

    </Form>
  )
}
