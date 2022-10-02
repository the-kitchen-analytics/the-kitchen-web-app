import React from "react";
import { Dropdown } from "semantic-ui-react";
import { getMonthOptions } from "../../../../utils/ui/dropdown";

const MonthSelect = ({ value, handleChange, options, disabled }) => (
    <Dropdown
        disabled={disabled}
        placeholder='Выберите месяц'
        selection
        options={options || getMonthOptions()}
        onChange={handleChange}
        value={value}
        fluid
    />
);

export default MonthSelect;