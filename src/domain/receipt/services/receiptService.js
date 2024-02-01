import {
  query,
  where,
  addDoc,
  deleteDoc,
  orderBy,
  onSnapshot
} from 'firebase/firestore'
import { RECEIPTS } from '../../../config/firebaseCollectionNames'
import { deleteAllByUid, getCollection, getDoc } from '../../../shared/utils'

const path = RECEIPTS
const collection = getCollection(path)

const getDocRef = (id) => {
  return getDoc(path, id)
}

export const streamReceiptsByUid = (uid, snapshot, error) => {
  console.debug('streamReceiptsByUid', uid)
  const q = query(collection, where('uid', '==', uid), orderBy('date', 'desc'))
  return onSnapshot(q, snapshot, error)
}

export const createReceipt = (data) => {
  console.debug('createReceipt', data)
  return addDoc(collection, data)
}

export const deleteReceiptById = (id) => {
  console.debug('deleteReceipt by id', id)
  return deleteDoc(getDocRef(id))
}

export const deleteAllReceiptsByUid = async (uid) => {
  await deleteAllByUid(path, uid)
}