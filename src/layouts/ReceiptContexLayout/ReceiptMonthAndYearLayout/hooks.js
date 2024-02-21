import { useCallback } from 'react'
import { findAllByMonthAndYear } from '../../../domain/receipt'
import { useFetchData, useUserDetailsContext } from '../../../shared/hooks'

export const useReceipts = ({ month, year }) => {
  const [{ uid }] = useUserDetailsContext()

  const fetchFn = useCallback(() => findAllByMonthAndYear(uid, month, year), [uid, month, year])

  return useFetchData(fetchFn)
}