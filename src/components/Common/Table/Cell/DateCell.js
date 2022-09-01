import React, { useContext } from "react";
import { Label } from "semantic-ui-react";
import { Price } from "../../Fields";
import { formatDate } from "../../../../utils/DateUtils";
import { AccentColorSetingContext } from "../../../../context/accentColorSettingContext";

const DateCell = ({ children, price = 0 }) => {

    const { accentColor } = useContext(AccentColorSetingContext);

    return (
        <>
            <Label ribbon size="large" color={accentColor}>
                <Price euro>{price}</Price>
            </Label>
            <h2>{formatDate(children)}</h2>
        </>
    );
}

export default DateCell;