import { parseDateFromDropdown } from '../../utils/date'

const validateReceiptDate = ({ date }) => {
  return !!date && !!parseDateFromDropdown(date)
}

export default validateReceiptDate