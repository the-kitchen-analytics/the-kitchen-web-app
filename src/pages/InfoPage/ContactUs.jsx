import { Header, List, Segment, Message } from 'semantic-ui-react'

const MESSAGE_CONTENT = 'Вы можете сообщить о баге и (или) предложить свою идею любым удобным способом'

export const ContactUs = ({ options, ...listProps }) => {

  const items = options.map(({ key, icon, href, content }) => ({
    key,
    icon,
    content: <a href={href} target="_blank" rel="noreferrer">{content}</a>
  }))

  return (
    <Segment padded>
      <Header
        icon={'talk'}
        content={'Связаться с нами'}
      />
      <Message
        content={MESSAGE_CONTENT}
      />
      <List
        {...listProps}
        items={items}
      />
    </Segment>
  )
}