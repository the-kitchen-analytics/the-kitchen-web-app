import { Header, List, Segment, Message } from 'semantic-ui-react'

const ContactUs = ({ options }) => (
  <Segment>
    <Header
      icon="talk"
      content="Связаться с нами"
    />

    <Message>
      <p>
        Вы можете сообщить о баге и (или) предложить свою идею любым удобным способом
      </p>
    </Message>

    <List size="large" relaxed>
      {
        options.map(({ key, icon, href, content }) => (
          <List.Item key={key}>
            <List.Icon name={icon} />
            <List.Content>
              <a href={href} target="_blank" rel="noreferrer">{content}</a>
            </List.Content>
          </List.Item>
        ))
      }
    </List>
  </Segment>
)

export default ContactUs