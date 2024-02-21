import { collection, orderBy, query, where } from 'firebase/firestore'
import { db } from '../../../config/firebase'
import { PROCEDURES_V2 } from '../../../config/firebaseCollectionNames'
import { getDocsByQuery } from '../../../shared/utils'

const getCollection = () => {
  return collection(db, PROCEDURES_V2)
}

export const getProceduresV2ByWorkerCategory = async (workerCategory) => {
  console.debug('getProceduresV2ByWorkerCategory', workerCategory)

  const q = query(
    getCollection(),
    where('workerCategory', '==', workerCategory),
    orderBy('name'))

  return getDocsByQuery(q)
}