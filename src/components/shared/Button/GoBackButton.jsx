import { useNavigate } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export const GoBackButton = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <Button
      fluid
      size="large"
      icon="arrow left"
      content="Назад"
      type="button"
      onClick={handleClick}
    />
  )
}