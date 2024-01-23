import { Header, Image } from 'semantic-ui-react'
import logo from './logo.svg'

export const FormLayoutHeader = ({ title, subheader }) => (
  <Header
    block
    textAlign="center"
    as='h2'
    style={{
      width: '100%'
    }}
  >
    <Header.Content>
      <Image src={logo}
        circular
        size="tiny"
        centered
      />
      {
        title
      }
    </Header.Content>
    <Header.Subheader>
      {
        subheader
      }
    </Header.Subheader>
  </Header>
)