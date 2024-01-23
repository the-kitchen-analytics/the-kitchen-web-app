import { DefaultButton } from '../../../../shared/components'

export const DeleteButton = (props) => (
  <DefaultButton
    negative
    basic
    fluid
    icon={'delete'}
    content={'Удалить'}
    {...props}
  />
)