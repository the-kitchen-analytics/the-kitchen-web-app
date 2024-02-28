import { Button } from 'semantic-ui-react'
import { useTheme } from '../../hooks'

export const DefaultButton = (props) => {
  const { size } = useTheme()

  return (
    <Button
      size={size}
      type={'button'}
      {...props}
    />
  )
}