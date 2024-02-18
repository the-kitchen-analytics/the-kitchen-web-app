import _ from 'lodash'
import { useEffect, useState } from 'react'
import { findAllReceiptsByUid } from '../../domain/receipt'

export const useReceipts = (options) => {
  console.debug('useReceipts')

  const { uid, limit } = options
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async (uid, limit) => {
    try {
      setIsLoading(true)
      setData(null)
      setError(null)

      const receipts = await findAllReceiptsByUid(uid, limit)
      const workedDays = _.uniq(receipts.map(({ dateFormatted }) => dateFormatted))
      const workedYears = _.uniq(receipts.map(({ date }) => date.getFullYear()))

      setData({ receipts, workedDays, workedYears })

    } catch (e) {
      console.error(e.toString())
      setError(e)

    } finally {
      setIsLoading(false)
    }

  }

  useEffect(() => {
    console.debug('useReceipts -> useEffect')

    if (uid) {
      fetchData(uid, limit)
    }
  }, [uid, limit])

  return [data, isLoading, error]
}