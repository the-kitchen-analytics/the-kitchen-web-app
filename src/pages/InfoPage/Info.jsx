import { Header, List, Segment } from 'semantic-ui-react'
import { formatDate, getLocalStorageSize } from '../../utils'
import { useOutletContext } from 'react-router-dom'

export const Info = () => {
  const { user } = useOutletContext()

  const listItems = [
    {
      key: 'app-version',
      text: 'Версия',
      value: import.meta.env.VITE_APP_VERSION,
    },
    {
      key: 'last-login-at',
      text: 'Дата последнего входа',
      value: formatDate(new Date(parseInt(user.metadata.lastLoginAt))),
    },
    {
      key: 'localstorage-usage',
      text: 'Размер кэша',
      value: getLocalStorageSize() + ' (KB)',
    },
  ]

  return (
    <Segment>
      <Header
        icon="info circle"
        content="О приложении"
      />
      <List
        relaxed
        bulleted
      >
        {
          listItems.map(({ key, text, value }) => (
            <List.Item key={key}>
              {text}: <strong>
                {value}
              </strong>
            </List.Item>
          ))
        }
      </List>
    </Segment>
  )
}