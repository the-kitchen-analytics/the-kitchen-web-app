import React from "react";
import { Button, Icon } from "semantic-ui-react";

const RefreshDataButton = ({ refreshData }) => (
    <Button
        compact
        icon
        name="refresh"
        onClick={() => refreshData()}>
        <Icon name="refresh" />
    </Button>
);

export default RefreshDataButton;