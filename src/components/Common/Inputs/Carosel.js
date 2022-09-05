import React from "react";
import { Button } from "semantic-ui-react";

const Carosel = ({ previousItemProps, nextItemProps, resetButtonProps }) => {
    return (
        <Button.Group basic fluid>
            <Button
                icon='left arrow'
                {...previousItemProps}
            />
            <Button
                icon="repeat"
                content='По умолчанию'
                {...resetButtonProps}
            />
            <Button
                icon='arrow right'
                {...nextItemProps}
            />
        </Button.Group>
    )
}

export default Carosel;