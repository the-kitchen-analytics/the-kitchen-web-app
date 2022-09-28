import React from "react";
import { List } from "semantic-ui-react";
import { buildPriceString } from "../../utils/money";

const OperationsCell = ({ children }) => (
    <List as='ul'>
        {
            children.map(op => (<List.Item as='li' key={op.name}>{buildPriceString(op.name, op.priceBeforeTaxes)}</List.Item>))
        }
    </List>
);

export default OperationsCell;