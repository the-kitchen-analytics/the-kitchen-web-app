import { Form } from 'semantic-ui-react'
import { DefaultButton } from './DefaultButton'
import './ButtonGroup.css'

export const ButtonGroup = ({ buttons = [] }) => (
  <div className={'ui form button-group'}>
    <Form.Group widths={'equal'}>
      {
        buttons.map(({ as: Button = DefaultButton, ...props }, i) => (
          <Form.Field key={i}>
            <Button {...props} />
          </Form.Field>
        ))
      }
    </Form.Group>
  </div>
)