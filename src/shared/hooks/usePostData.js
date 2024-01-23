import { useState } from 'react'

export const usePostData = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  const doRequest = async (asyncFunction, ...functionArguments) => {
    try {
      setError(null)
      setIsLoading(true)
      return await asyncFunction(...functionArguments)

    } catch (error) {
      console.error(error)
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return [
    isLoading,
    error,
    doRequest
  ]
}