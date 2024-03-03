import _ from 'lodash'
import { getCurrentDate } from './getCurrentDate'
import { getFirstDayOfMonth, getLastDayOfMonth, FIRST_MONTH_INDEX, LAST_MONTH_INDEX } from './monthUtils'

const CURRENT_YEAR = getCurrentDate().getFullYear()

export const getFirstDayOfYear = (year) => getFirstDayOfMonth(FIRST_MONTH_INDEX, year)

export const getLastDayOfYear = (year) => getLastDayOfMonth(LAST_MONTH_INDEX, year)

export const getYearOptions = () => _.range(2022, CURRENT_YEAR + 1).reverse()