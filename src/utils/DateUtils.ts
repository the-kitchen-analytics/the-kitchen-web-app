import { format, parse } from "date-fns";

const parseDate = (dateStr: string, formatPattern: string = 'dd.MM.yyyy'): Date => {
    return parse(dateStr, formatPattern, new Date())
}

const parseDateTime = (dateStr: string, formatPattern: string = 'dd.MM.yyyy HH:ss'): Date => {
    return parse(dateStr, formatPattern, new Date())
}

const formatDate = (date: Date, formatPattern: string = 'dd.MM.yyyy'): String => {
    return format(date, formatPattern)
}

export {
    parseDate,
    parseDateTime,
    formatDate
}