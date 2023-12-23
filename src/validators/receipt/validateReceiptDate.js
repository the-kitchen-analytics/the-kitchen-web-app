import { parseDateFromDropdown } from '../../utils'

export const validateReceiptDate = ({ date }) => {
  return !!date && !!parseDateFromDropdown(date)
}