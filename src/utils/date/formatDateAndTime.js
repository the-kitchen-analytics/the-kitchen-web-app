import format from 'date-fns/format'

const formatDateAndTime = (date, formatPattern = 'dd.MM.yyyy hh:mm') => {
  return format(date, formatPattern)
}

export default formatDateAndTime