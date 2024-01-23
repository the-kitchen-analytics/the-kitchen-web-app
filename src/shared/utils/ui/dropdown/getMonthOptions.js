import { monthIndexes } from '../../date'
import { monthIndexToMonthOption } from './monthIndexToMonthOption'

const DEFAULT_MONTH_SELECT_OPTIONS = Object.freeze(monthIndexes.map(monthIndexToMonthOption))

export const getMonthOptions = () => {
  return DEFAULT_MONTH_SELECT_OPTIONS
}