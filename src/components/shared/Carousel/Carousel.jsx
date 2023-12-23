
import { Button } from 'semantic-ui-react'

export const Carousel = ({ previousItemProps, nextItemProps, resetButtonProps }) =>  (
  <Button.Group
    size="large"
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