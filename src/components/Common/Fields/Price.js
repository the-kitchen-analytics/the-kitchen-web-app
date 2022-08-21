import React from "react";

const Price = ({ children, euro, fixed = 2 }) => (
    <>{euro ? '€' : ''} {children.toFixed(fixed)}</>
);

export default Price;