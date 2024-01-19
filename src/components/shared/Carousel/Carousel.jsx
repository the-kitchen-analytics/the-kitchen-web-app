import { Button } from 'semantic-ui-react'
import { DefaultButton } from '../Button'

export const Carousel = ({ leftButton, resetButton, rightButton }) => {

  const buttons = [
    { key: 'left', icon: 'chevron left', ...leftButton },
    { key: 'reset', content: 'По умолчанию', ...resetButton },
    { key: 'right', icon: 'chevron right', ...rightButton }
  ].map(button => ({ ...button, as: DefaultButton }))

  return (
    <Button.Group
      fluid
      basic
      buttons={buttons}
    />
  )
}