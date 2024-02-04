import { Button } from 'semantic-ui-react'
import { useTheme } from '../../hooks'
import './Carousel.css'

export const Carousel = ({ leftButton, resetButton, rightButton }) => {

  const { size } = useTheme()

  const buttons = [
    { key: 'left', icon: 'chevron left', className: 'left-button', ...leftButton },
    { key: 'reset', content: 'По умолчанию', ...resetButton },
    { key: 'right', icon: 'chevron right', className: 'right-button', ...rightButton }
  ]

  return (
    <Button.Group
      fluid
      basic
      className={'carousel'}
      size={size}
      buttons={buttons}
    />
  )
}