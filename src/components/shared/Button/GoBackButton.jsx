import { useNavigate } from 'react-router-dom'
import { DefaultButton } from './DefaultButton'

export const GoBackButton = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <DefaultButton
      fluid
      icon={'arrow left'}
      content={'Назад'}
      onClick={handleClick}
    />
  )
}