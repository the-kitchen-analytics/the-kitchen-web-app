import { Menu } from 'semantic-ui-react'
import {
  CREATE_RECEIPT,
  INFO,
  SETTINGS,
  STATISTICS,
  TABLE
} from '../../data/routePaths'
import { NavigationMenuItem } from './NavigationMenuItem'
import { useUserSettingsContext } from '../../hooks'
import './NavigationMenu.css'

const menuItems = [
  {
    name: 'home',
    icon: 'home',
    to: TABLE
  },
  {
    name: 'statistics',
    icon: 'chart pie',
    to: STATISTICS
  },
  {
    name: 'create-receipt',
    icon: 'plus circle',
    to: CREATE_RECEIPT
  },
  {
    name: 'info',
    icon: 'question circle',
    to: INFO
  },
  {
    name: 'settings',
    icon: 'setting',
    to: SETTINGS
  }
]

export const NavigationMenu = () => {
  const { settings: { accentColor } } = useUserSettingsContext()

  return (
    <Menu
      className="navigation-menu"
      icon
      borderless
      fluid
      defaultActiveIndex={1}
      color={accentColor || 'black'}
      fixed="bottom"
      size="large"
      widths={menuItems.length}
    >
      {
        menuItems.map(item => <NavigationMenuItem key={item.name} {...item} />)
      }
    </Menu>
  )
}
