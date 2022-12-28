import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import FormLayout from '../../components/layouts/FormLayout'
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../../config/firebase'
import { usePostData } from '../../hooks'
import CreateAccountForm from './CreateAccountForm'

export default function CreateAccount() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    workerCategory: '',
  })

  const [isLoading, error, makeRequest] = usePostData()

  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user, navigate])

  const handleRegisterWithMailAndPassword = (e) => {
    e.preventDefault()
    const { name, email, password, workerCategory } = formData
    makeRequest(registerWithEmailAndPassword, name, email, password, workerCategory)
  }

  const handleSignUpWithGoogle = (e) => {
    e.preventDefault()
    makeRequest(signInWithGoogle)
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
          handleSignUpWithGoogle={handleSignUpWithGoogle}
        />

      </FormLayout>
    </Container>
  )
}