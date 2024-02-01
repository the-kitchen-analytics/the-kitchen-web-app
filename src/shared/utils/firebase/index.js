import { collection, doc, query, where, getDocs, deleteDoc } from 'firebase/firestore'
import { db } from '../../../config/firebase'

export const getCollection = collectionName => collection(db, collectionName)
export const getDoc = (path, id) => doc(db, path, id)
export const getDocData = doc => ({ id: doc.id, ...doc.data() })

export const getDocsData = (snapshot) => {
  console.debug('snapshot size:', snapshot.size)
  return snapshot.docs.map(getDocData)
}

export const deleteAllByUid = async (path, uid) => {
  console.debug('deleteAllByUid', path, uid)

  const q = query(getCollection(path), where('uid', '==', uid))
  const snapshot = await getDocs(q)

  snapshot.docs
    .map(({ ref }) => deleteDoc(ref))
}