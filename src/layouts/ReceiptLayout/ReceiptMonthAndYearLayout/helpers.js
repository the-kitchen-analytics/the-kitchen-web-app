import _ from 'lodash'
import { FIRST_MONTH_INDEX, LAST_MONTH_INDEX } from '../../../shared/utils'

export const increment = ({ month, year }) =>
  month < LAST_MONTH_INDEX
    ? { year, month: month + 1 }
    : { year: year + 1, month: FIRST_MONTH_INDEX }

export const decrement = ({ month, year }) =>
  month > FIRST_MONTH_INDEX
    ? { year, month: month - 1 }
    : { year: year - 1, month: LAST_MONTH_INDEX }

export const reset = initialDate => initialDate

export const shouldDisableIncrementButton = ({ month, year }, yearOptions) =>
  month === LAST_MONTH_INDEX && !yearOptions.includes(year + 1)

export const shouldDisableDecrementButton = ({ month, year }, yearOptions) =>
  month === FIRST_MONTH_INDEX && !yearOptions.includes(year - 1)

export const shouldDisableResetButton = (date, initialDate) =>
  _.isEqual(initialDate, date)
