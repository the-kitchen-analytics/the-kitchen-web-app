import { useCallback, useState, useEffect } from 'react'

export const useFetchData = (fetchFunction) => {

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState({})
  const [hasError, setHasError] = useState(false)

  const fetchData = useCallback(async () => {

    try {
      setIsLoading(true)
      const fetchedData = await fetchFunction()
      setData(fetchedData)

    } catch (e) {
      console.error(e)
      setHasError(true)

    } finally {
      setIsLoading(false)
    }

  }, [fetchFunction])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const refresh = useCallback(() => {
    fetchData()
  }, [fetchData])

  return [
    data,
    isLoading,
    hasError,
    refresh
  ]
}