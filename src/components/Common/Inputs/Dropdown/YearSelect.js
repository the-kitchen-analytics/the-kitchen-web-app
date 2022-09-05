import React from "react";
import { Dropdown } from "semantic-ui-react";

const DEFAULT_YEAR_SELECT_OPTIONS = Object.freeze([2022]
    .map(year => ({
        key: year,
        text: year,
        value: year
    })));

const YearSelect = ({ value, handleChange, options = DEFAULT_YEAR_SELECT_OPTIONS }) => (
    <Dropdown
        placeholder='Выберите год'
        selection
        options={options}
        onChange={handleChange}
        value={value}
        fluid
    />
);

export default YearSelect;