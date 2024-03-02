import { Form } from 'semantic-ui-react'
import { useTheme } from '../../hooks'
import { getCurrentDate, formatDateForDatePicker } from '../../utils'
import './DatePicker.css'

const getMaxTodayProp = () => formatDateForDatePicker(getCurrentDate())

export const DatePicker = ({ handleChange, sizeDefault, maxToday, ...props }) => {

  const { size, ...theme } = useTheme()

  const baseDateProps = {
    type: 'date',
    onChange: handleChange,
    icon: 'calendar outline',
    size: sizeDefault
      ? null
      : size,
    ...theme,
    ...props
  }

  const dateProps = maxToday
    ? { ...baseDateProps, max: getMaxTodayProp() }
    : { ...baseDateProps }

  return (
    <Form.Input
      {...dateProps}
    />
  )
}