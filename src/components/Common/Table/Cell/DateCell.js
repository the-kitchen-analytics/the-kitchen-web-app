import React from "react";
import { Label } from "semantic-ui-react";
import { Price } from "../../Fields";
import { formatDate } from "../../../../utils/DateUtils";
import { getRandomFancyColorName } from "../../../../utils/ColorUtils";

const DateCell = ({ children, price = 0 }) => (
    <>
        <Label ribbon size="large" color={getRandomFancyColorName()}>
            <Price euro>{price}</Price>
        </Label>
        <h2>{formatDate(children)}</h2>
    </>
);

export default DateCell;