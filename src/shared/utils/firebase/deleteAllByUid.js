import {
  query,
  where,
  getDocs,
  deleteDoc,
} from 'firebase/firestore'

import { getCollection } from './'

export const deleteAllByUid = async (uid, path) => {
  console.debug('deleteAllByUid', uid, path)

  const q = query(getCollection(path), where('uid', '==', uid))
  const snapshot = await getDocs(q)

  snapshot.docs
    .map(({ ref }) => deleteDoc(ref))
}