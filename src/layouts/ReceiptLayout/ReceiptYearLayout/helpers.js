import _ from 'lodash'

export const increment = (selectedYearIndex, options) => options[selectedYearIndex - 1]

export const decrement = (selectedYearIndex, options) => options[selectedYearIndex + 1]

export const reset = options => _.first(options)

export const shouldDisableResetButton = (date, options) => _.isEqual(date, _.first(options))

export const shouldDisableIncrementButton = (selectedYearIndex, options) =>
  options.length === 0 || selectedYearIndex === 0

export const shouldDisableDecrementButton = (selectedYearIndex, options) =>
  options.length === 0 || selectedYearIndex === _.lastIndexOf(options) - 1
