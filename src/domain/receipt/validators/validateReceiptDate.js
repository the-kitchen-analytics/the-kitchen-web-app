import { parseDateFromDropdown } from '../../../shared/utils'

export const validateReceiptDate = ({ date }) => {
  return !!date && !!parseDateFromDropdown(date)
}