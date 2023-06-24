import { Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const NavigationMenuItem = ({ name, icon, to, activeItem, handleItemClick }) => (
  <Menu.Item
    className="navigation-menu-item"
    name={name}
    active={activeItem === name}
    onClick={() => handleItemClick(name)}
    as={Link}
    to={to}
  >
    <Icon name={icon} size="big" />
  </Menu.Item>
)

export default NavigationMenuItem