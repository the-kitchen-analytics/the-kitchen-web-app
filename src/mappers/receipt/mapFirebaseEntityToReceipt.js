import { formatDate } from "../../utils/date";

const mapFirebaseEntityToReceipt = (firebaseEntity) => {
    const entryData = firebaseEntity.data();

    return {
        ...entryData,
        id: firebaseEntity.id,
        dateCreated: entryData.dateCreated.toDate(),
        date: entryData.date.toDate(),
        dateFormatted: formatDate(entryData.date.toDate()),
    }
}

export default mapFirebaseEntityToReceipt;