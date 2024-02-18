import _ from 'lodash'
import { useEffect, useState } from 'react'
import { mapFirebaseEntityToReceipt, streamReceiptsByUid } from '../../domain/receipt'

export const useReceipts = (options) => {
  const { uid, limit } = options

  const [data, setData] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleSnapshot = (querySnapshot) => {
      setIsLoading(true)

      const receipts = querySnapshot.docs.map(mapFirebaseEntityToReceipt)
      const workedDays = _.uniq(receipts.map(({ dateFormatted }) => dateFormatted))
      const workedYears = _.uniq(receipts.map(({ date }) => date.getFullYear()))

      setData({ receipts, workedDays, workedYears })
      setIsLoading(false)
    }

    const handleError = (error) => {
      setError(error)
      setIsLoading(false)
    }

    const unsubscribe = streamReceiptsByUid(options, handleSnapshot, handleError)
    return unsubscribe
  }, [uid, limit])

  return [data, isLoading, error]
}