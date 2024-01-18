import { useTheme } from '../../../hooks'
import { DefaultButton } from './DefaultButton'

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