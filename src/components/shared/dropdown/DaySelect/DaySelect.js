import React from "react";
import { Dropdown } from "semantic-ui-react";

const DaySelect = ({ value, handleChange, options = [], disabled }) => (
    <Dropdown
        disabled={disabled || options.length <= 1}
        placeholder='Выберите день'
        search selection
        options={options}
        onChange={handleChange}
        value={value}
        fluid
    />
);

export default DaySelect;