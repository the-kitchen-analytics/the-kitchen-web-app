import { formatISO } from 'date-fns'

export const formatDateForDatePicker = (date) => formatISO(date, { representation: 'date' })