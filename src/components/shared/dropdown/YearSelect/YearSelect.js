import React from "react";
import { Dropdown } from "semantic-ui-react";

const YearSelect = ({ value, handleChange, options, disabled }) => (
    <Dropdown
        disabled={disabled}
        placeholder='Выберите год'
        selection
        options={options}
        onChange={handleChange}
        value={value}
        fluid
    />
);

export default YearSelect;