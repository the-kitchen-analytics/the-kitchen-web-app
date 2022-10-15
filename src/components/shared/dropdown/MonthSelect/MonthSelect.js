import React from "react";
import { Dropdown } from "semantic-ui-react";
import { useUserSettings } from "../../../../hooks";
import { getMonthOptions } from "../../../../utils/ui/dropdown";

const MonthSelect = ({ value, handleChange, options, disabled }) => {

    const { settings: { controlsSize } } = useUserSettings();

    return (
        <Dropdown
            disabled={disabled}
            placeholder='Выберите месяц'
            button
            basic
            selection
            options={options || getMonthOptions()}
            onChange={handleChange}
            value={value}
            className={controlsSize}
            fluid
        />
    );
}

export default MonthSelect;