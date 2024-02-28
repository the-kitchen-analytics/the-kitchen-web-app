import _ from 'lodash'

export const increment = (selectedDayIndex, options) => options[selectedDayIndex - 1]

export const decrement = (selectedDayIndex, options) => options[selectedDayIndex + 1]

export const reset = options => _.first(options)

export const shouldDisableResetButton = (date, options) => _.isEmpty(options) || _.isEqual(date, _.first(options))

export const shouldDisableIncrementButton = (selectedDayIndex, options) =>
  options.length === 0 || selectedDayIndex === 0

export const shouldDisableDecrementButton = (selectedDayIndex, options) =>
  options.length === 0 || selectedDayIndex === _.lastIndexOf(options) - 1
