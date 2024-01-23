import { useUserSettingsContext } from './'

const DEFAULT_THEME = {
  accentColor: 'blue',
  size: 'large'
}

export const useTheme = (defautTheme = DEFAULT_THEME) => {
  const { settings = defautTheme } = useUserSettingsContext()
  const { accentColor: color, size } = settings

  return {
    color,
    size
  }
}