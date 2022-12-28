
import { Dropdown } from 'semantic-ui-react'
import { useUserSettings } from '../../../../hooks'

const YearSelect = ({ value, handleChange, options, disabled }) => {

  const { settings: { controlsSize } } = useUserSettings()

  return (
    <Dropdown
      disabled={disabled || options.length <= 1}
      placeholder='Выберите год'
      button
      basic
      selection
      options={options}
      onChange={handleChange}
      value={value}
      className={controlsSize}
      fluid
    />
  )
}

export default YearSelect