import {
  addDoc,
  query,
  where,
  getDocs,
  updateDoc
} from 'firebase/firestore'

import { USER_DETAILS } from '../config/firebaseCollectionNames'
import { deleteAllByUid, getCollection } from '../utils'

const path = USER_DETAILS
const collection = getCollection(path)

export const getUserDetailsByUid = async (uid) => {
  console.debug('getUserDetailsByUid', uid)

  const q = query(collection, where('uid', '==', uid))
  const resultSet = await getDocs(q)

  if (!resultSet.empty) {
    return resultSet.docs[0]
  }

  throw new Error(`Not found userDetails with uid: ${uid}`)
}

export const createUserDetails = (userDetails) => {
  console.debug('createUserDetails', userDetails)
  return addDoc(collection, userDetails)
}

export const updateUserDetails = (ref, payload) => {
  return updateDoc(ref, payload)
}

export const deleteUserDetailsByUid = async (uid) => {
  await deleteAllByUid(uid, path)
}