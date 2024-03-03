import { collection, doc, query, where, getDocs, deleteDoc } from 'firebase/firestore'
import { db } from '../../../config/firebase'

export const getCollection = collectionName => collection(db, collectionName)
export const getDocRef = (path, id) => doc(db, path, id)
export const getDocData = doc => ({ id: doc.id, ...doc.data() })

export const getDocsData = (snapshot, mapper) => {
  console.debug('snapshot size', snapshot.size)
  return snapshot.docs.map(mapper)
}

export const getDocsByQuery = async (query, mapper = getDocData) => {
  const snapshot = await getDocs(query)
  return getDocsData(snapshot, mapper)
}

export const deleteAllByUid = async (path, uid) => {
  console.debug('deleteAllByUid', path, uid)

  const q = query(getCollection(path), where('uid', '==', uid))
  const snapshot = await getDocs(q)

  snapshot.docs
    .map(({ ref }) => deleteDoc(ref))
}