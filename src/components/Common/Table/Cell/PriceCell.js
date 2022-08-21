import React from "react";
import { Price } from "../../Fields";

const PriceCell = ({ children }) => (
    <Price euro>
        {children}
    </Price>
)

export default PriceCell;