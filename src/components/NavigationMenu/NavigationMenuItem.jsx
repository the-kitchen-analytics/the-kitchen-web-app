import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const getIconProps = (name) => ({
  link: true,
  size: 'big',
  name
})

export const NavigationMenuItem = ({ icon, to }) => (
  <Menu.Item
    as={NavLink}
    to={to}
    icon={getIconProps(icon)}
    className={'navigation-menu-item'}
  />
)