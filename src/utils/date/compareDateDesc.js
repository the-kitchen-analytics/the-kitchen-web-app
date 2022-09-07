import { compareDesc } from "date-fns";

const compareDateDesc = (dateLeft, dateRight) => {
    return compareDesc(dateLeft, dateRight);
}

export default compareDateDesc;