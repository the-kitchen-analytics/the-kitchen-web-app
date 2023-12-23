import { Link } from 'react-router-dom'
import { Container, Divider, Icon, Message, Segment } from 'semantic-ui-react'

export const NotFoundPage = () => (
  <Container>
    <Segment>
      <Message
        size="large"
        warning
      >
        <Message.Header>
          <Icon name="exclamation circle" />
          Такой страницы не существует
        </Message.Header>

        <Divider />

        <Message.Content>
          <p>
            Вы можете вернуться на {<Link to='/'>главную</Link>} страницу.
          </p>
        </Message.Content>

      </Message>
    </Segment>
  </Container>
)