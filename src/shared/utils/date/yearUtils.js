import { getFirstDayOfMonth, getLastDayOfMonth, FIRST_MONTH_INDEX, LAST_MONTH_INDEX } from './monthUtils'

export const getFirstDayOfYear = (year) => getFirstDayOfMonth(FIRST_MONTH_INDEX, year)
export const getLastDayOfYear = (year) => getLastDayOfMonth(LAST_MONTH_INDEX, year)