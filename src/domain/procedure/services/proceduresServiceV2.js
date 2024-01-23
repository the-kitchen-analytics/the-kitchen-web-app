import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { db } from '../../../config/firebase'
import { PROCEDURES_V2 } from '../../../config/firebaseCollectionNames'
import { getDocsData } from '../../../shared/utils'

const getCollection = () => {
  return collection(db, PROCEDURES_V2)
}

export const getProceduresV2ByWorkerCategory = async (workerCategory) => {
  console.debug('getProceduresV2ByWorkerCategory', workerCategory)

  const q = query(
    getCollection(),
    where('workerCategory', '==', workerCategory),
    orderBy('name'))

  const snapshot = await getDocs(q)
  const data = getDocsData(snapshot)

  console.debug('procedures', workerCategory, data)

  return data
}