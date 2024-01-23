import { Button } from 'semantic-ui-react'
import { useTheme } from '../../../shared/hooks'

export const Carousel = ({ leftButton, resetButton, rightButton }) => {

  const { size } = useTheme()
  const injectSizeProp = button => ({ size, ...button })

  const buttons = [
    { key: 'left', icon: 'chevron left', ...leftButton },
    { key: 'reset', content: 'По умолчанию', ...resetButton },
    { key: 'right', icon: 'chevron right', ...rightButton }
  ].map(injectSizeProp)

  return (
    <Button.Group
      fluid
      basic
      buttons={buttons}
    />
  )
}