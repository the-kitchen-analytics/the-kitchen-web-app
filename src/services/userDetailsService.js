import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
} from 'firebase/firestore'

import { db } from '../config/firebase'
import { USER_DETAILS } from '../config/firebaseCollectionNames'

const getCollection = () => {
  return collection(db, USER_DETAILS)
}

export const getUserDetailsByUid = async (uid) => {
  console.debug('getUserDetailsByUid', uid)

  const q = query(getCollection(), where('uid', '==', uid))
  const resultSet = await getDocs(q)

  if (!resultSet.empty) {
    return resultSet.docs[0]
  }

  throw new Error(`Not found userDetails with uid: ${uid}`)
}

export const createUserDetails = (userDetails) => {
  console.debug('createUserDetails', userDetails)
  return addDoc(getCollection(), userDetails)
}

export const updateUserDetails = (ref, payload) => {
  return updateDoc(ref, payload)
}