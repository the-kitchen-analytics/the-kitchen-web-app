import React, { useContext } from "react";
import { Label } from "semantic-ui-react";
import Price from "../ui/Price"
import { formatDate } from "../../utils/date";
import { UserSettingsContext } from "../../context/UserSettingsContext";

const DateCell = ({ children, price = 0 }) => {

    const { settings: { accentColor } } = useContext(UserSettingsContext);

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