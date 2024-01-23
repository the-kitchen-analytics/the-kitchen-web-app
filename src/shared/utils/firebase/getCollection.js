import { collection } from 'firebase/firestore'
import { db } from '../../../config/firebase'

export const getCollection = (collectionName) => {
  return collection(db, collectionName)
}