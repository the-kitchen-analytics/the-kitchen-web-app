import { NavLink } from 'react-router-dom'
import { INFO_PATH, RECEIPT_CREATE_PATH, SETTINGS_PATH, STATISTICS_DAY_PATH, TABLE_DAY_PATH } from '../../../router'

const getIconProps = (name) => ({
  link: true,
  size: 'big',
  name
})

export const menuItems = [
  {
    key: 'home',
    icon: 'home',
    to: TABLE_DAY_PATH,
  },
  {
    key: 'statistics',
    icon: 'chart pie',
    to: STATISTICS_DAY_PATH,
  },
  {
    key: 'create-receipt',
    icon: 'plus circle',
    to: RECEIPT_CREATE_PATH,
  },
  {
    key: 'info',
    icon: 'info circle',
    to: INFO_PATH,
  },
  {
    key: 'settings',
    icon: 'setting',
    to: SETTINGS_PATH,
  }
].map(({ icon, ...item }) => ({
  ...item,
  as: NavLink,
  icon: getIconProps(icon),
  className: 'navigation-menu-item'
}))