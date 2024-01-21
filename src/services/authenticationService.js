import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  reauthenticateWithCredential,
  EmailAuthProvider
} from 'firebase/auth'
import { auth } from '../config/firebase'
import { createUserDetails, deleteUserDetailsByUid } from './userDetailsService'
import { deleteAllReceiptsByUid } from './receiptService'

export const register = async ({ name, email, password, workerCategory }) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(credential => createUserDetails({
      uid: credential.user.uid,
      name,
      email,
      workerCategory
    }))
}

export const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const logOut = () => {
  return signOut(auth)
}

export const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email)
}

export const deleteCurrentUserAndRelatedData = async (password) => {
  const { currentUser } = auth
  const { uid, email } = currentUser

  console.debug('deleteUser', uid)

  await reauthenticateWithCredential(currentUser, EmailAuthProvider.credential(email, password))
  await deleteAllReceiptsByUid(uid)
  await deleteUserDetailsByUid(uid)
  await currentUser.delete()
}