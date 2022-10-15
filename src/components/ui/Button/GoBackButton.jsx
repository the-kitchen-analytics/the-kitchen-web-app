import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react"
import { useUserSettings } from "../../../hooks";


const GoBackButton = () => {

    const { settings: { controlsSize } } = useUserSettings();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    return (
        <Button
            fluid
            size={controlsSize}
            icon="arrow left"
            labelPosition='left'
            content="Назад"
            type="button"
            onClick={handleClick}
        />
    );
}

export default GoBackButton;