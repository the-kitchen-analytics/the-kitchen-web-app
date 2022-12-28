import {
  addDoc,
  collection,
} from 'firebase/firestore'

import { db } from '../config/firebase'
import { GOODS } from '../config/firebaseCollectionNames'
import { deleteAll, getDocsData } from '../utils/firebase'

const getCollection = () => {
  return collection(db, GOODS)
}

export const getAllGoods = async () => {
  console.debug('getAllGoods')

  const snapshot = await getCollection().get()

  return getDocsData(snapshot)
}

export const addGoods = (goods) => {
  console.debug('addGoods', goods)
  return addDoc(getCollection(), goods)
}

export const addAllGoods = (goods) => {
  console.debug('addAllGoods', goods)

  const collection = getCollection()

  return goods.map(goods => addDoc(collection, goods))
}

export const deleteAllGoods = async () => {
  console.debug('deleteAllGoods')
  deleteAll(await getCollection().get())
}