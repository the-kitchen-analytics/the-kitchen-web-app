import { getCurrentDate } from '../../utils/date'

export const getCurrentMonthAndYear = () => {
  const now = getCurrentDate()

  return Object.freeze({
    month: now.getMonth(),
    year: now.getFullYear()
  })
}