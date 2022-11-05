import { formatDate } from "../date"
import parseFirebaseDate from "./parseFirebaseDate"

const formatFirebaseDate = (firebaseDate) => {
    return formatDate(parseFirebaseDate(firebaseDate));
}

export default formatFirebaseDate;