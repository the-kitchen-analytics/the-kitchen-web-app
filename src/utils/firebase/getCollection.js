import { collection } from 'firebase/firestore'
import { db } from '../../config/firebase'

const getCollection = (path) => {
  return collection(db, path)
}

export default getCollection