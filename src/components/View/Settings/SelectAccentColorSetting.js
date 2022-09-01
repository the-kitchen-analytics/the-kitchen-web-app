import React, { useContext } from "react";
import { Header, Icon, Segment, Label } from "semantic-ui-react";
import { capitalize } from "lodash";
import { AccentColorSetingContext } from "../../../context/accentColorSettingContext";


const SelectAccentColorSetting = ({ colorOptions }) => {

    const { accentColor, setAccentColor } = useContext(AccentColorSetingContext);

    const buildOption = (colorName) => {

        const isActive = colorName === accentColor;

        return (
            <Label
                as='a'
                onClick={() => setAccentColor(colorName)}
                basic={!isActive}
                color={colorName}
            >
                {capitalize(colorName)}
            </Label>
        )
    }

    return (
        <Segment>
            <Header>
                <Icon name="adjust" /> Акцентный цвет
            </Header>

            <p>
                Нажмите, чтобы выбрать:
            </p>
            <Label.Group size='huge'>
                {
                    colorOptions.map(buildOption)
                }
            </Label.Group>
        </Segment>
    )
}


export default SelectAccentColorSetting;