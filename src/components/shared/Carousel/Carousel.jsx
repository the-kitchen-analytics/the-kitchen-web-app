import { Button } from 'semantic-ui-react'
import { useTheme } from '../../../hooks'

export const Carousel = ({ previousItemProps, nextItemProps, resetButtonProps }) => {
  const { size } = useTheme()

  return (
    <Button.Group
      fluid
      basic
      size={size}
    >
      <Button
        icon='chevron left'
        {...previousItemProps}
      />
      <Button
        content='По умолчанию'
        {...resetButtonProps}
      />
      <Button
        icon='chevron right'
        {...nextItemProps}
      />
    </Button.Group>
  )
}