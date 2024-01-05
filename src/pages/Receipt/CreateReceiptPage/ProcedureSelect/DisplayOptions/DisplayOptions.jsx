import { List } from 'semantic-ui-react'
import { Switch } from '../../../../../components/shared/Switch'

import './DisplayOptions.css'

export const DisplayOptions = ({ options }) => (
  <div className='display-options'>
    <List>
      {
        options.map(option => (
          <List.Item key={option.key}>
            <Switch
              {...option}
            />
          </List.Item>
        ))
      }
    </List>

  </div>
)