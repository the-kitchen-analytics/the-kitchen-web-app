import { Header } from 'semantic-ui-react'
import './MainHeader.css'

export const MainHeader = (props) => (
  <Header
    as={'h1'}
    className={'main-header'}
    {...props}
  />
)