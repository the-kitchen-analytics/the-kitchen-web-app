import { useCallback } from 'react'
import { useFetchData, useUserDetailsContext } from '../../../shared/hooks'
import { findAllByDate } from '../../../domain/receipt'

export const useReceipts = (date) => {
  const [{ uid }] = useUserDetailsContext()

  const fetchFn = useCallback(() => findAllByDate(uid, date), [uid, date])

  return useFetchData(fetchFn)
}