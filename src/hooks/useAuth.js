import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const useAuth = () => useAuthState(auth)

export default useAuth