import { Navigate, useLocation } from 'react-router-dom'
import { Loader } from '../shared/'
import { Message } from 'semantic-ui-react'
import { LOGIN } from '../../data/routePaths'
import { useAuth } from '../../hooks'

const RequireAuth = ({ children }) => {

  const [user, loading, error] = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <Loader
        content="Загрузка информации о пользователе"
      />
    )
  }

  if (error) {
    return (
      <Message
        negative
        header="Ошибка авторизации"
        content="При попытке загрузки информауии об авторизации произошла ошибка"
      />
    )
  }

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={LOGIN} state={{ from: location }} replace />
  }

  return children
}

export default RequireAuth

