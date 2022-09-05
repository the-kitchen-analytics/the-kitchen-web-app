import React from "react";
import { Icon } from "semantic-ui-react";

const NoContentView = () => (
    <div className="view">
        <Icon name="info circle" />
        <>Нет данных</>
    </div>
);

export default NoContentView;