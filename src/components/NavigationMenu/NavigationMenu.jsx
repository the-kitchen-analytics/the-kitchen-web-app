import { Menu } from 'semantic-ui-react'
import { RECEIPT_CREATE_PATH, INFO_PATH, SETTINGS_PATH, STATISTICS_PATH, TABLE_PATH } from '../../data/routePaths'
import { NavigationMenuItem } from './NavigationMenuItem'
import { useTheme } from '../../hooks'
import './NavigationMenu.css'

const menuItems = [
  {
    name: 'home',
    icon: 'home',
    to: TABLE_PATH
  },
  {
    name: 'statistics',
    icon: 'chart pie',
    to: STATISTICS_PATH
  },
  {
    name: 'create-receipt',
    icon: 'plus circle',
    to: RECEIPT_CREATE_PATH
  },
  {
    name: 'info',
    icon: 'info circle',
    to: INFO_PATH
  },
  {
    name: 'settings',
    icon: 'setting',
    to: SETTINGS_PATH
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
