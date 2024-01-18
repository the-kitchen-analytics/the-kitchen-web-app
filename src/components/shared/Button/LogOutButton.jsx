import { logOut } from '../../../services/authenticationService'
import { DefaultButton } from './'

const CONFIRM_LOGOUT_MESSAGE = 'Вы действительно хотите выйти?'

const handleLogOut = async () => {
  if (window.confirm(CONFIRM_LOGOUT_MESSAGE)) {
    console.debug('log out')
    localStorage.clear()
    await logOut()
  }
}

const DEFAULT_BUTTON_PROPS = {
  negative: true,
  icon: 'sign out',
  content: 'Выйти',
  onClick: handleLogOut,
}

export const LogOutButton = (props) => (
  <DefaultButton
    {...DEFAULT_BUTTON_PROPS}
    {...props}
  />
)
