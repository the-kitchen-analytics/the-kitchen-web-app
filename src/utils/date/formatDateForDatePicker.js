import { formatISO } from "date-fns";

const formatDateForDatePicker = (date) => formatISO(date, { representation: 'date' });

export default formatDateForDatePicker;