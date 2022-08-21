import { format, parse, compareAsc } from "date-fns";

const parseDate = (dateStr: string, formatPattern: string = 'dd.MM.yyyy'): Date => {
    return parse(dateStr, formatPattern, new Date())
}

const parseDateTime = (dateStr: string, formatPattern: string = 'dd.MM.yyyy HH:ss'): Date => {
    return parse(dateStr, formatPattern, new Date())
}

const formatDate = (date: Date, formatPattern: string = 'dd.MM.yyyy'): String => {
    return format(date, formatPattern)
}

const compare = (dateLeft: Date, dateRight: Date): number => {
    return compareAsc(dateLeft, dateRight);
}

const getCurrentDate = (): Date => new Date();

const getCurrentMonth = (): Number => getCurrentDate().getMonth()

export {
    parseDate,
    parseDateTime,
    formatDate,
    compare,
    getCurrentDate,
    getCurrentMonth
}