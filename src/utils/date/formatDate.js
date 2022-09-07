import format from "date-fns/format";

const formatDate = (date, formatPattern = 'dd.MM.yyyy') => {
    return format(date, formatPattern)
}

export default formatDate;