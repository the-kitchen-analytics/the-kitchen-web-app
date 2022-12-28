
import { Link, useMatch } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const NavigationBarItem = ({ to, children }) => {

  const isActive = !!useMatch(to)

  return (
    <Link to={to}>
      <Menu.Item
        active={isActive}
      >
        {children}
      </Menu.Item>
    </Link>
  )
}

export default NavigationBarItem