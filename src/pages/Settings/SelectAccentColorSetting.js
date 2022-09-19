import React, { useContext } from "react";
import { Header, Icon, Segment, Label, Message } from "semantic-ui-react";
import { capitalize } from "lodash";
import { UserSettingsContext } from "../../context/UserSettingsContext";


const SelectAccentColor = ({ colorOptions }) => {

    const { settings: { accentColor }, setSetting } = useContext(UserSettingsContext);

    const buildOption = (colorName) => {

        const isActive = colorName === accentColor;

        return (
            <Label
                key={colorName}
                as='a'
                onClick={() => setSetting('accentColor', colorName)}
                basic={!isActive}
                color={colorName}
            >
                {
                    isActive ? <Icon name='check circle' /> : ''
                }
                {capitalize(colorName)}
            </Label>
        )
    }

    return (
        <Segment>
            <Header
                icon="paint brush"
                content="Акцентный цвет"
            />

            <Message
                header='Нажмите, чтобы выбрать:'
                content='Выбранный цвет будет отображаться в меню, таблицах и других частях приложения'
            />

            <Label.Group size='huge'>
                {
                    colorOptions.map(buildOption)
                }
            </Label.Group>
        </Segment>
    )
}


export default SelectAccentColor;