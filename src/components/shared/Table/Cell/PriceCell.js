import React from "react";
import Price from "../../../ui/Price";

const PriceCell = ({ children }) => (
    <Price euro>
        {children}
    </Price>
)

export default PriceCell;