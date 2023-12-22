import { russianMonthNames } from '../../../data/monthNames'

export const monthIndexToMonthOption = (index) => Object.freeze({
  key: index,
  text: russianMonthNames[index],
  value: index
})