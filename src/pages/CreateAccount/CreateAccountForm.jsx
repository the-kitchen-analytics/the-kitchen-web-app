import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'semantic-ui-react'
import { WorkerCategorySelect } from '../../components/shared/dropdown'
import { useApplicationSettings } from '../../hooks'
import { handleInputChange } from '../../utils/ui/form'

const CreateAccountForm = ({
  formData: { name, email, password, workerCategory },
  setFormData,
  isLoading,
  error,
  handleRegisterWithMailAndPassword
}) => {

  const { settings: { controlsSize } } = useApplicationSettings()

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
      size={controlsSize}
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

      <Form.Button
        fluid
        size={controlsSize}
        type="submit"
        content="Зарегистрироваться"
        loading={isLoading}
        disabled={shouldDisableSubmitButton()}
      />

      <Form.Field>
        Уже есть аккаунт? <Link to="/">Войти</Link>.
      </Form.Field>

    </Form>
  )
}

export default CreateAccountForm