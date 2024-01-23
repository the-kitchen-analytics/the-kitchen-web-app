import { monthNames } from '../../date'

export const monthIndexToMonthOption = (index) => Object.freeze({
  key: index,
  text: monthNames[index],
  value: index
})