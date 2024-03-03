import { useCallback } from 'react'
import { findAllByYear } from '../../../domain/receipt'
import { useFetchData, useUserDetailsContext } from '../../../shared/hooks'

export const useReceipts = (year) => {
  const [{ uid }] = useUserDetailsContext()

  const fetchFn = useCallback(() => findAllByYear(uid, year), [uid, year])

  return useFetchData(fetchFn)
}