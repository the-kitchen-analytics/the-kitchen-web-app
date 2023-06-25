import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const getIconProps = (name) => ({
  fitted: true,
  link: true,
  size: 'big',
  name
})

const NavigationMenuItem = ({ icon, to, active, handleItemClick }) => (
  <Menu.Item
    className="navigation-menu-item"
    active={active}
    onClick={handleItemClick}
    as={Link}
    to={to}
    icon={getIconProps(icon)}
  />
)

export default NavigationMenuItem