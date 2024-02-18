import { query, where, addDoc, deleteDoc, orderBy, limit, getDocs } from 'firebase/firestore'
import { RECEIPTS } from '../../../config/firebaseCollectionNames'
import { deleteAllByUid, getCollection, getDoc } from '../../../shared/utils'
import { mapFirebaseEntityToReceipt } from '../mappers'

const path = RECEIPTS
const collection = getCollection(path)

const getDocRef = (id) => {
  return getDoc(path, id)
}

export const findAllReceiptsByUid = async (uid, limitNumber = 100) => {
  console.debug('findAllReceiptsByUid', uid)

  const q = query(collection,
    where('uid', '==', uid),
    orderBy('date', 'desc'),
    limit(limitNumber))

  const snapshot = await getDocs(q)
  return snapshot.docs.map(mapFirebaseEntityToReceipt)
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