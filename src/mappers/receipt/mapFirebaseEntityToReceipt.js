import { formatDate } from '../../utils'

export const mapFirebaseEntityToReceipt = (firebaseEntity) => {
  const entryData = firebaseEntity.data()

  return {
    ...entryData,
    id: firebaseEntity.id,
    dateCreated: entryData.dateCreated.toDate(),
    date: entryData.date.toDate(),
    dateFormatted: formatDate(entryData.date.toDate()),
    notes: entryData.notes || ''
  }
}