import { Accordion, Form, Divider } from 'semantic-ui-react'
import { useToggleState } from '../../../../hooks'

export const DisplayOptionsAccordition = ({ options }) => {

  const [shouldDisplayOptions, toggleShouldDisplayOptions] = useToggleState(false)

  return (
    <Accordion fluid>

      <Accordion.Title
        icon='setting'
        content='Параметры'
        active={shouldDisplayOptions}
        onClick={toggleShouldDisplayOptions}
      />

      <Accordion.Content active={shouldDisplayOptions}>
        {
          options.map(option => (
            <Form.Field key={option.key}>
              <Form.Radio
                toggle
                type={'checkbox'}
                color={'green'}
                {...option}
              />
            </Form.Field>
          ))
        }
        <Divider hidden />
      </Accordion.Content>

    </Accordion>
  )
}