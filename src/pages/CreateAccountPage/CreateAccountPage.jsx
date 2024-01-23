import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import { FormLayout } from '../../layouts'
import { useAuth, usePostData } from '../../shared/hooks'
import { CreateAccountForm } from './CreateAccountForm'
import { register } from '../../domain/app'
import { HOME_PATH } from '../../data/routePaths'

export const CreateAccountPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    workerCategory: ''
  })

  const [isLoading, error, makeRequest] = usePostData()

  const [user] = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate(HOME_PATH)
    }
  }, [user, navigate])

  const handleRegisterWithMailAndPassword = async (e) => {
    e.preventDefault()
    await makeRequest(register, formData)
  }

  return (
    <Container>
      <FormLayout
        title="Зарегистрироваться"
        subheader="После регистрации вы сможете полноценно пользоваться всеми возможностями приложения"
        error={error}
      >
        <CreateAccountForm
          formData={formData}
          setFormData={setFormData}
          isLoading={isLoading}
          error={error}
          handleRegisterWithMailAndPassword={handleRegisterWithMailAndPassword}
        />
      </FormLayout>
    </Container>
  )
}