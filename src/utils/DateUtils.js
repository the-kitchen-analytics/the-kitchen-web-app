import { format, parse, compareAsc } from "date-fns";

/**
 * 
 * @param {string} dateStr 
 * @param {string} formatPattern 
 * @returns Date
 */
const parseDate = (dateStr, formatPattern = 'dd.MM.yyyy') => {
    return parse(dateStr, formatPattern, new Date())
}

/**
 * 
 * @param {string} dateStr 
 * @param {string} formatPattern 
 * @returns Date
 */
const parseDateTime = (dateStr, formatPattern = 'dd.MM.yyyy HH:ss') => {
    return parse(dateStr, formatPattern, new Date())
}

/**
 * 
 * @param {Date} date 
 * @param {string} formatPattern 
 * @returns string
 */
const formatDate = (date, formatPattern = 'dd.MM.yyyy') => {
    return format(date, formatPattern)
}

/**
 * 
 * @param {Date} dateLeft 
 * @param {Date} dateRight 
 * @returns number
 */
const compare = (dateLeft, dateRight) => {
    return compareAsc(dateLeft, dateRight);
}

const getCurrentDate = () => new Date();

const getCurrentMonth = () => getCurrentDate().getMonth()

export {
    parseDate,
    parseDateTime,
    formatDate,
    compare,
    getCurrentDate,
    getCurrentMonth
}