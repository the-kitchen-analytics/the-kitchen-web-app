import { Menu } from 'semantic-ui-react'
import { CREATE_RECEIPT, INFO, SETTINGS, STATISTICS, TABLE } from '../../data/routePaths'
import { NavigationMenuItem } from './NavigationMenuItem'
import { useTheme } from '../../hooks'
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
    icon: 'info circle',
    to: INFO
  },
  {
    name: 'settings',
    icon: 'setting',
    to: SETTINGS
  }
]

export const NavigationMenu = () => {
  const theme = useTheme()

  return (
    <Menu
      {...theme}
      className={'navigation-menu'}
      icon
      borderless
      fixed={'bottom'}
      widths={menuItems.length}
    >
      {
        menuItems.map(item => <NavigationMenuItem key={item.name} {...item} />)
      }
    </Menu>
  )
}
