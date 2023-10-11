import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import FormLayout from '../../components/layouts/FormLayout'
import { useAuth, usePostData } from '../../hooks'
import CreateAccountForm from './CreateAccountForm'
import { register } from '../../services/authenticationService'

export default function CreateAccount() {
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
      navigate('/')
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