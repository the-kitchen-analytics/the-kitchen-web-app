
import { Button } from 'semantic-ui-react'
import { useUserSettings } from '../../../hooks'

const Carosel = ({ previousItemProps, nextItemProps, resetButtonProps }) => {

  const { settings: { controlsSize } } = useUserSettings()

  return (
    <Button.Group
      size={controlsSize}
      basic
      fluid
    >
      <Button
        icon='left arrow'
        {...previousItemProps}
      />
      <Button
        icon="repeat"
        content='По умолчанию'
        {...resetButtonProps}
      />
      <Button
        icon='arrow right'
        {...nextItemProps}
      />
    </Button.Group>
  )
}

export default Carosel