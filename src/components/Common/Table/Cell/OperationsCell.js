import React from "react";
import { List } from "semantic-ui-react";

const OperationsCell = ({ children }) => (
    <List as='ul'>
        {
            children.map(op => (<List.Item as='li' key={op.name}>{op.name}</List.Item>))
        }
    </List>
);

export default OperationsCell;