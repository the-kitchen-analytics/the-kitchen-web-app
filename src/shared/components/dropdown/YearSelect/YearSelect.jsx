import { DefaultSelect } from '../DefaultSelect'

export const YearSelect = ({ value, handleChange, options, disabled }) => (
  <DefaultSelect
    disabled={disabled || options.length <= 1}
    placeholder='Выберите год'
    button
    basic
    selection
    options={options}
    onChange={handleChange}
    value={value}
    fluid
  />
)