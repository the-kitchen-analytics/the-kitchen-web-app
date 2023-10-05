import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import { createUserDetails } from './userDetailsService'

const register = async ({ name, email, password, workerCategory }) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(credential => createUserDetails({
      uid: credential.user.uid,
      name,
      email,
      workerCategory
    }))
}

const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

const logOut = () => {
  return signOut(auth)
}

const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email)
}

export {
  logIn,
  logOut,
  register,
  resetPassword
}