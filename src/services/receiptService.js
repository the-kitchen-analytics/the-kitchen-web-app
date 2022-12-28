import {
  query,
  where,
  addDoc,
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  orderBy,
  onSnapshot,
} from 'firebase/firestore'
import { db } from '../config/firebase'
import { RECEIPTS } from '../config/firebaseCollectionNames'
import { getDoc } from '../utils/firebase'

const getCollection = () => {
  return collection(db, RECEIPTS)
}

export const streamReceiptsByUid = (uid, snapshot, error) => {
  console.debug('streamReceiptsByUid', uid)
  const q = query(getCollection(), where('uid', '==', uid), orderBy('date', 'desc'))
  return onSnapshot(q, snapshot, error)
}

export const getAllReceiptsByUid = (uid) => {
  console.debug('getAllReceiptsByMasterUid', uid)
  const q = query(getCollection(), where('uid', '==', uid), orderBy('date', 'desc'))
  return getDocs(q)
}

export const getReceipt = (id) => {
  console.debug('getReceipt', id)
  return getDoc(RECEIPTS, id)
}

export const createReceipt = (data) => {
  console.debug('createReceipt', data)
  return addDoc(getCollection(), data)
}

export const updateReceipt = (id, payload) => {
  console.debug('updateReceipt', id, payload)
  setDoc(getDoc(RECEIPTS, id), payload)
}

export const deleteReceipt = (receipt) => {
  console.debug('deleteReceipt', receipt)
  return deleteDoc(receipt)
}

export const deleteReceiptById = (id) => {
  console.debug('deleteReceipt by id', id)
  return deleteDoc(getDoc(RECEIPTS, id))
}

export const deleteReceipts = (receipts) => {
  console.debug('deleteReceipts', receipts)
  receipts.map(receipt => deleteDoc(receipt.ref))
}

export const deleteAllReceiptByUid = (uid) => {
  console.debug('deleteAllReceiptByUid', uid)

  getAllReceiptsByUid(uid)
    .then((resultSet) => deleteReceipts(resultSet.docs))
}