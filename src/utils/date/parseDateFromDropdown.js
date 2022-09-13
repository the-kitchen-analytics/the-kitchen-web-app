import { parseISO } from "date-fns";

const parseDateFromDropdown = (date) => {
    return parseISO(date, { representation: 'date' })
}

export default parseDateFromDropdown;