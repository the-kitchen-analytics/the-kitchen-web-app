import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export const useAuth = () => useAuthState(auth)