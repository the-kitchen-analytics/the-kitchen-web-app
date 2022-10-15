import { formatDate } from "../date";

const convertFirebaseData = (firebaseDataEntry) => {
    const entryData = firebaseDataEntry.data();
    return {
        ...entryData,
        id: firebaseDataEntry.id,
        dateCreated: entryData.dateCreated.toDate(),
        date: entryData.date.toDate(),
        dateFormatted: formatDate(entryData.date.toDate()),
    }
}

export default convertFirebaseData;