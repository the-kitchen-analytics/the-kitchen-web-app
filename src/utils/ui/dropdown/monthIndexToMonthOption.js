import { russianMonthNames } from '../../../data/monthNames'

const monthIndexToMonthOption = (index) => Object.freeze({
  key: index,
  text: russianMonthNames[index],
  value: index
})

export default monthIndexToMonthOption