import { useEffect } from 'react'

export const useFirstRender = (action) => {
  useEffect(() => {
    action()
  }, [])
}