import { doc } from 'firebase/firestore'
import { db } from '../../../config/firebase'

export const getDoc = (path, id) => {
  return doc(db, path, id)
}