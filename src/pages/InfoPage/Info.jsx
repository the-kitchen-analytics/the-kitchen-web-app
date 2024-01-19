import { useOutletContext } from 'react-router-dom'
import { Header, List, Segment } from 'semantic-ui-react'
import { formatDate, getLocalStorageSize } from '../../utils'

const ListItem = ({ text, value }) => (
  <>
    {text}: <strong>{value}</strong>
  </>
)

export const Info = (props) => {
  const { user } = useOutletContext()

  const listItems = [
    {
      key: 'app-version',
      text: 'Версия',
      value: import.meta.env.VITE_APP_VERSION
    },
    {
      key: 'last-login-at',
      text: 'Дата последнего входа',
      value: formatDate(new Date(parseInt(user.metadata.lastLoginAt)))
    },
    {
      key: 'localstorage-usage',
      text: 'Размер кэша',
      value: `${getLocalStorageSize()} KB`
    }
  ].map(({ key, text, value }) => ({
    key,
    content: <ListItem text={text} value={value} />
  }))

  return (
    <Segment raised>
      <Header
        icon="info circle"
        content="О приложении"
      />
      <List
        {...props}
        items={listItems}
      />
    </Segment>
  )
}