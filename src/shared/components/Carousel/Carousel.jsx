import { Button } from 'semantic-ui-react'
import { useTheme } from '../../hooks'

export const Carousel = ({ leftButton, resetButton, rightButton }) => {

  const { size } = useTheme()

  const buttons = [
    { key: 'left', icon: 'chevron left', ...leftButton },
    { key: 'reset', content: 'По умолчанию', ...resetButton },
    { key: 'right', icon: 'chevron right', ...rightButton }
  ]

  return (
    <Button.Group
      fluid
      basic
      size={size}
      buttons={buttons}
    />
  )
}