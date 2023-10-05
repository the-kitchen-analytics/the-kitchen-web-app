import { useAuth } from '../hooks'

export default function WithCurrentUser(Component) {

  return function WithLoadingComponent({ ...props }) {

    const [user, loading, error] = useAuth()

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
