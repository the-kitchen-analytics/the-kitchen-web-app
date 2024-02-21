import { query, where, addDoc, deleteDoc, orderBy, limit, getDoc, getDocs, Timestamp } from 'firebase/firestore'
import { RECEIPTS } from '../../../config/firebaseCollectionNames'
import {
  deleteAllByUid,
  getCollection,
  getDocRef, getDocsByQuery, getFirstDayOfMonth,
  getFirstDayOfYear, getLastDayOfMonth,
  getLastDayOfYear,
} from '../../../shared/utils'
import { mapFirebaseEntityToReceipt } from '../mappers'

const path = RECEIPTS
const collection = getCollection(path)

export const findAllReceiptsByUid = async (uid, limitNumber = 100) => {
  console.debug('findAllReceiptsByUid', uid)

  const q = query(collection,
    where('uid', '==', uid),
    orderBy('date', 'desc'),
    limit(limitNumber))

  const snapshot = await getDocs(q)
  return snapshot.docs.map(mapFirebaseEntityToReceipt)
}

export const findById = async (id) => {
  console.debug('findById', id)

  const docRef = getDocRef(path, id)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) {
    throw new Error(`Document with id ${id} was not found`)
  }

  return mapFirebaseEntityToReceipt(docSnap)
}

export const findAllByDate = async (uid, date) => {
  console.debug('findAllByDate', uid, date.toLocaleDateString())

  const q = query(collection,
    where('uid', '==', uid),
    where('date', '==', Timestamp.fromMillis(date)),
    orderBy('date', 'desc'))

  return getDocsByQuery(q, mapFirebaseEntityToReceipt)
}

export const findAllByYear = async (uid, year) => {
  console.debug('findAllByYear', uid, year)

  const startDate = Timestamp.fromDate(getFirstDayOfYear(year))
  const endDate = Timestamp.fromDate(getLastDayOfYear(year))

  const q = query(collection,
    where('uid', '==', uid),
    where('date', '>=', startDate),
    where('date', '<=', endDate),
    orderBy('date', 'desc'))

  return getDocsByQuery(q, mapFirebaseEntityToReceipt)
}

export const findAllByMonthAndYear = async (uid, month, year) => {
  console.debug('findAllByMonthAndYear', uid, month, year)

  const startDate = Timestamp.fromDate(getFirstDayOfMonth(month, year))
  const endDate = Timestamp.fromDate(getLastDayOfMonth(month, year))

  const q = query(collection,
    where('uid', '==', uid),
    where('date', '>=', startDate),
    where('date', '<=', endDate),
    orderBy('date', 'desc'))

  return getDocsByQuery(q, mapFirebaseEntityToReceipt)
}

export const createReceipt = (data) => {
  console.debug('createReceipt', data)
  return addDoc(collection, data)
}

export const deleteReceiptById = (id) => {
  console.debug('deleteReceiptById', id)
  return deleteDoc(getDocRef(path, id))
}

export const deleteAllReceiptsByUid = async (uid) => {
  await deleteAllByUid(path, uid)
}