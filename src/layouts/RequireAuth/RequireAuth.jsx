import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Message } from 'semantic-ui-react'
import { Loader } from '../../shared/components'
import { LOGIN_PATH } from '../../router'
import { useAuth } from '../../shared/hooks'

export const RequireAuth = () => {

  const [user, loading, error] = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <Loader
        indeterminate
        content="Загрузка информации о пользователе"
      />
    )
  }

  if (error) {
    return (
      <Message
        negative
        header="Ошибка авторизации"
        content="При попытке загрузки информации об авторизации произошла ошибка"
      />
    )
  }

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={LOGIN_PATH} state={{ from: location }} replace />
  }

  return <Outlet context={{ user }} />
}