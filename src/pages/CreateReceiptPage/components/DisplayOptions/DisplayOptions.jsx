import { List } from 'semantic-ui-react'
import { Switch } from '../../../../shared/components'

export const DisplayOptions = ({ options }) => (
  <List relaxed>
    {
      options.map(option => (
        <List.Item key={option.key}>
          <Switch {...option} />
        </List.Item>
      ))
    }
  </List>
)