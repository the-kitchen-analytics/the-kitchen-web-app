import React from "react";
import { Dropdown } from "semantic-ui-react";

const MonthSelect = ({ value, handleChange, options = [] }) => (
    <Dropdown
        placeholder='Выберите день'
        search selection
        options={options}
        onChange={handleChange}
        value={value}
        fluid
    />
);

export default MonthSelect;