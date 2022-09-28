import React from "react";
import { Icon } from "semantic-ui-react";

const NoContentView = () => (
    <div className="view">
        <Icon name="info circle" />
        <span>Нет данных</span>
    </div>
);

export default NoContentView;