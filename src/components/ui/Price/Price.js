import _ from "lodash";
import React from "react";

const Price = ({ children, euro, fixed = 2 }) => (
    <>{euro ? '€' : ''} {_.isNumber(children) ? children.toFixed(fixed) : 'NaN'}</>
);

export default Price;