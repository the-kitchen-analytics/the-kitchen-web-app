import { Form } from 'semantic-ui-react'
import classNames from 'classnames'
import { DefaultButton } from './DefaultButton'

export const ButtonGroup = ({ buttons = [] }) => (
  <div className={'ui form'}>
    <Form.Group widths={'equal'} className={'mb-0'}>
      {
        buttons.map(({ as: Button = DefaultButton, ...props }, i) => (
          <Form.Field
            key={i}
            className={classNames({ 'mb-0': i === buttons.length - 1 })}
          >
            <Button {...props} />
          </Form.Field>
        ))
      }
    </Form.Group>
  </div>
)