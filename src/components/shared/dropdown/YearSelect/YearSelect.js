import React from "react";
import { Dropdown } from "semantic-ui-react";

const YearSelect = ({ value, handleChange, options, disabled }) => (
    <Dropdown
        disabled={disabled || options.length <= 1}
        placeholder='Выберите год'
        selection
        options={options}
        onChange={handleChange}
        value={value}
        fluid
    />
);

export default YearSelect;