import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../config/firebase'

export default function WithCurrentUser(Component) {

  return function WithLoadingComponent({ ...props }) {

    const [user, loading, error] = useAuthState(auth)

    if (loading) {
      return (
        <div>
          <p>Initialising User...</p>
        </div>
      )
    }

    if (error) {
      return (
        <div>
          <p>Error: {error}</p>
        </div>
      )
    }

    if (user) {
      const newProps = {
        ...props,
        user
      }

      return (
        <Component {...newProps} />
      )
    }

    return null
  }
}
