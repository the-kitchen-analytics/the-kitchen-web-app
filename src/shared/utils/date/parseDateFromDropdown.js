import { parseISO } from 'date-fns'

export const parseDateFromDropdown = (date) => {
  return parseISO(date, { representation: 'date' })
}