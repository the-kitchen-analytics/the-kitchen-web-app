import { useUserSettingsContext } from '../../../hooks/index.js'
import { Button } from 'semantic-ui-react'

const DEFAULT_SETTINGS = {
  accentColor: 'blue'
}

export const SubmitButton = (props) => {
  const { settings = DEFAULT_SETTINGS } = useUserSettingsContext()

  return (
    <Button
      type={'submit'}
      color={settings.accentColor}
      {...props}
    />
  )
}