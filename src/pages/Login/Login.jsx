import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import LoginForm from './LoginForm'

import { auth, signInWithGoogle, signInWithEmailAndPassword } from '../../config/firebase'
import { useState } from 'react'
import FormLayout from '../../components/layouts/FormLayout'
import { usePostData } from '../../hooks'

const Login = () => {

  const [user] = useAuthState(auth)

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

  const handleLoginWithEmailAndPassword = (e) => {
    e.preventDefault()

    const { email, password } = formData
    makeRequest(signInWithEmailAndPassword, email, password)
  }

  const handleLoginWithGoogle = (e) => {
    e.preventDefault()
    makeRequest(signInWithGoogle)
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
          handleLoginWithGoogle={handleLoginWithGoogle}
          isLoading={isLoading}
          hasError={error}
        />
      </FormLayout>
    </Container>
  )
}

export default Login