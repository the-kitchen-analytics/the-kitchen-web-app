import { DefaultSelect } from '../DefaultSelect'
import { getMonthOptions } from '../../../../utils'

export const MonthSelect = ({ value, handleChange, options, disabled }) => (
  <DefaultSelect
    disabled={disabled}
    placeholder='Выберите месяц'
    button
    basic
    options={options || getMonthOptions()}
    onChange={handleChange}
    value={value}
    fluid
  />
)