import { parse } from "date-fns";

const parseDate = (dateStr, formatPattern = 'dd.MM.yyyy') => {
    return parse(dateStr, formatPattern, new Date())
}

export default parseDate;
