import { Menu } from 'semantic-ui-react'
import { useTheme } from '../../../shared/hooks'
import { menuItems } from './helpers'
import './NavigationMenu.css'

export const NavigationMenu = () => {
  const theme = useTheme()

  return (
    <Menu
      {...theme}
      borderless
      className={'navigation-menu'}
      fixed={'bottom'}
      widths={menuItems.length}
      items={menuItems}
    />
  )
}
