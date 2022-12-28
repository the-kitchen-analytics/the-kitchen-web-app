
import { Image, Button, Card, Form, Header, Divider } from 'semantic-ui-react'
import Logout from '../Logout'
import Email from '../Email'
import { useUserSettings } from '../../hooks'

const Profile = ({ userData, handleEdit, logout }) => {

  const defaultProfileUrl = 'https://react.semantic-ui.com/images/wireframe/square-image.png'

  const { photoURL, displayName, email, workerCategory } = userData
  const { settings: { controlsSize } } = useUserSettings()

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          <Header as='h3'>
            <Image
              rounded
              src={photoURL || defaultProfileUrl}
            /> {displayName}
          </Header>
        </Card.Header>
        <Divider />
        <Card.Meta>
          {
            workerCategory
          }
        </Card.Meta>
        <Card.Description>
          <Email to={email} />
        </Card.Description>
      </Card.Content>

      {
        (handleEdit || logout) && (
          <Card.Content extra>
            <Form>
              {
                handleEdit && (
                  <Form.Field>
                    <Button
                      fluid
                      icon="edit"
                      type="button"
                      content="Изменить"
                      size={controlsSize}
                      onClick={handleEdit}
                    />
                  </Form.Field>
                )
              }

              {
                logout && (
                  <Form.Field>
                    <Logout
                      fluid
                      size={controlsSize}
                    />
                  </Form.Field>
                )
              }
            </Form>
          </Card.Content >
        )
      }
    </Card >
  )
}

export default Profile