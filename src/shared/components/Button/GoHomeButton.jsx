import { useNavigate } from 'react-router-dom'
import { HOME_PATH } from '../../../router'
import { DefaultButton } from './DefaultButton.jsx'

export const GoHomeButton = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(HOME_PATH)
  }

  return (
    <DefaultButton
      fluid
      icon={'home'}
      content={'Главная'}
      onClick={handleClick}
    />
  )
}