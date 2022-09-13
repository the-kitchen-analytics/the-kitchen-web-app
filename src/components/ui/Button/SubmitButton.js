import React, { useContext } from 'react';
import { Button } from 'semantic-ui-react';
import { UserSettingsContext } from '../../../context/UserSettingsContext';

const SubmitButton = ({ content, disabled = false }) => {

    const { settings: { accentColor } } = useContext(UserSettingsContext);

    return (
        <Button
            size='large'
            fluid
            type="submit"
            color={accentColor}
            content={content}
            disabled={disabled}
        />
    );
}

export default SubmitButton;