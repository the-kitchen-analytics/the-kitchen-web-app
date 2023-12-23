import { useMemo } from 'react'
import { useUserSettings } from '../../hooks'
import { Button } from 'semantic-ui-react'
import { logOut } from '../../services/authenticationService'

const CONFIRM_LOGOUT_MESSAGE = 'Вы действительно хотите выйти?'

export const LogoutButton = (props) => {

  const { settings: { controlsSize } } = useUserSettings()

  const handleLogOut = async () => {
    if (window.confirm(CONFIRM_LOGOUT_MESSAGE)) {
      console.debug('log out')
      localStorage.clear()
      await logOut()
    }
  }

  const defultProps = useMemo(() => ({
    // fluid: true,
    negative: true,
    icon: 'sign out',
    content: 'Выйти',
    size: controlsSize,
    onClick: handleLogOut,
    ...props
  }), [props, controlsSize])

  return (
    <Button
      {...defultProps}
    />
  )
}