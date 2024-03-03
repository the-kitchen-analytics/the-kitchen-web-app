import { findById } from '../services'

export const receiptEditPageLoader = async ({ params: { receiptId } }) => {
  return await findById(receiptId)
}

export const receiptDayLoader = async () => {
  return null
}

export const receiptMonthAndYearLoader = async () => {
  return null
}
