import React from "react";
import { Dropdown } from "semantic-ui-react";

const DEFAULT_MONTH_SELECT_OPTIONS = Object.freeze([
    {
        key: 0,
        text: 'Январь',
        value: 0
    },
    {
        key: 1,
        text: 'Февраль',
        value: 1
    },
    {
        key: 2,
        text: 'Март',
        value: 2
    },
    {
        key: 3,
        text: 'Апрель',
        value: 3
    },
    {
        key: 4,
        text: 'Май',
        value: 4
    },
    {
        key: 5,
        text: 'Июнь',
        value: 5
    },
    {
        key: 6,
        text: 'Июль',
        value: 6
    },
    {
        key: 7,
        text: 'Август',
        value: 7
    },
    {
        key: 8,
        text: 'Сентябрь',
        value: 8
    },
    {
        key: 9,
        text: 'Октябрь',
        value: 9
    },
    {
        key: 10,
        text: 'Ноябрь',
        value: 10
    },
    {
        key: 11,
        text: 'Декабрь',
        value: 11
    }
]);

const MonthSelect = ({ value, handleChange, options = DEFAULT_MONTH_SELECT_OPTIONS }) => (
    <Dropdown
        placeholder='Выберите день'
        selection
        options={options}
        onChange={handleChange}
        value={value}
        fluid
    />
);

export default MonthSelect;