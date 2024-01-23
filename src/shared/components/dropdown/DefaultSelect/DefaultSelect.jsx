import { Dropdown } from 'semantic-ui-react'
import { useTheme } from '../../../../shared/hooks'

export const DefaultSelect = (props) => {
  const { size } = useTheme()

  return (
    <Dropdown
      placeholder='Выберите'
      className={size}
      {...props}
    />
  )
}