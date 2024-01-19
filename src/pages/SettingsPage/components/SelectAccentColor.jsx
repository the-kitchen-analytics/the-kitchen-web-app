import _ from 'lodash'
import { Header, Icon, Segment, Label, Message } from 'semantic-ui-react'
import { useUserSettingsContext } from '../../../hooks'

const ColorOption = ({ isActive, value, handleClick }) => (
  <Label
    as="a"
    onClick={() => handleClick(value)}
    basic={!isActive}
    color={value}
  >
    {
      isActive && <Icon name="check circle" />
    }
    {_.capitalize(value)}
  </Label>
)

export const SelectAccentColor = ({ colorOptions }) => {

  const { settings: { accentColor }, setSetting } = useUserSettingsContext()

  const handleColorChange = (colorName) => setSetting('accentColor', colorName)

  return (
    <Segment padded>
      <Header
        icon="paint brush"
        content="Акцентный цвет"
      />

      <Message
        header="Нажмите, чтобы выбрать"
        content="Выбранный цвет будет отображаться в меню, таблицах и других частях приложения"
      />

      <Label.Group size="huge">
        {
          colorOptions.map(colorName => (
            <ColorOption
              key={colorName}
              isActive={colorName === accentColor}
              value={colorName}
              handleClick={handleColorChange}
            />
          ))
        }
      </Label.Group>
    </Segment>
  )
}