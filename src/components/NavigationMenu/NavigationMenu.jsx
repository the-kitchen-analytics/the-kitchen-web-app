import { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { useUserSettings } from '../../hooks'
import { CREATE_RECEIPT, INFO, SETTINGS, STATISTICS_DAILY, TABLE_DAILY } from '../../data/routePaths'
import NavigationMenuItem from './NavigationMenuItem'
import './NavigationMenu.css'
import { scrollToTop } from '../../utils/ui'

const menuItems = [
  {
    name: 'home',
    icon: 'home',
    to: TABLE_DAILY
  },
  {
    name: 'statistics',
    icon: 'chart pie',
    to: STATISTICS_DAILY
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

const NavigationMenu = () => {
  const [activeItem, setActiveItem] = useState('home')
  const { settings: { accentColor } } = useUserSettings()

  const isActive = (item) => item.name === activeItem

  const handleItemClick = (item) => {
    if (isActive(item)) {
      scrollToTop()
    }

    setActiveItem(item.name)
  }

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
        menuItems.map(item => (
          <NavigationMenuItem
            key={item.name}
            {...item}
            active={isActive(item)}
            handleItemClick={() => handleItemClick(item)}
          />
        ))
      }
    </Menu>
  )
}

export default NavigationMenu
