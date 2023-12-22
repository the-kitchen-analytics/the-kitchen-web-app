import format from 'date-fns/format'

export const formatDate = (date, formatPattern = 'dd.MM.yyyy') => {
  return format(date, formatPattern)
}