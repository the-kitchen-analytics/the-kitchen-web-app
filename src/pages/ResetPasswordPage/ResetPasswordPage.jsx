import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import { FormLayout } from '../../layouts'
import { ResetPasswordForm } from './ResetPasswordForm'
import { usePostData } from '../../shared/hooks'
import { resetPassword } from '../../domain/app'
import { HOME_PATH } from '../../router'

export const ResetPasswordPage = () => {

  const [formData, setFormData] = useState({
    email: ''
  })

  const [isLoading, error, makeRequest] = usePostData()

  const navigate = useNavigate()

  const handlePasswordReset = async (e) => {
    e.preventDefault()
    const { email } = formData

    await makeRequest(resetPassword, email)

    if (!error) {
      navigate(HOME_PATH)
    }
  }

  return (
    <Container>
      <FormLayout
        title="Cбросить пароль"
        subheader="Пожалуйста, введите адрес электронной почты, к которому привязан Ваш аккаунт."
        error={error}
      >
        <ResetPasswordForm
          formData={formData}
          setFormData={setFormData}
          isLoading={isLoading}
          handlePasswordReset={handlePasswordReset}
        />
      </FormLayout>
    </Container>
  )
}