import { DefaultButton } from './DefaultButton'
import { useTheme } from '../../hooks'

export const SubmitButton = (props) => {
  const theme = useTheme()

  return (
    <DefaultButton
      type={'submit'}
      {...theme}
      {...props}
    />
  )
}