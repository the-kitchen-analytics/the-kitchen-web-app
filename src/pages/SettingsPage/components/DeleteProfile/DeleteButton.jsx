import { DefaultButton } from '../../../../components/shared'

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