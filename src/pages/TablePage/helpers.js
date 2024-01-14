import { getAllByDay, getAllByMonthAndYear, getAllByYear } from '../../services/receiptFilterService'

const format = (data) => {
  return { data }
}

export const getTableDataByDay = (date, receipts) =>
  format(getAllByDay(date, receipts))

export const getTableDataByMonthAndYear = (date, receipts) =>
  format(getAllByMonthAndYear(date, receipts))

export const getTableDataByYear = (date, receipts) =>
  format(getAllByYear(date, receipts))