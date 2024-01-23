import { format } from 'date-fns'

export const formatDate = (date, formatPattern = 'dd.MM.yyyy') => {
  return format(date, formatPattern)
}