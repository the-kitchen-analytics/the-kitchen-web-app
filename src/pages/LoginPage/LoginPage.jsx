import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import { LoginForm } from './LoginForm'
import { FormLayout } from '../../components/layouts'
import { useAuth, usePostData } from '../../hooks'
import { logIn } from '../../services/authenticationService'

export const LoginPage = () => {

  const [user] = useAuth()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [isLoading, error, makeRequest] = usePostData()

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true })
    }
  }, [user, navigate])

  const handleLoginWithEmailAndPassword = async (e) => {
    e.preventDefault()

    const { email, password } = formData
    await makeRequest(logIn, email, password)
  }

  return (
    <Container>
      <FormLayout
        title="Вход"
        subheader="После входа вы сможете пользоваться всеми функциями приложения"
        error={error}
      >
        <LoginForm
          formData={formData}
          setFormData={setFormData}
          handleLoginWithEmailAndPassword={handleLoginWithEmailAndPassword}
          isLoading={isLoading}
          hasError={error}
        />
      </FormLayout>
    </Container>
  )
}