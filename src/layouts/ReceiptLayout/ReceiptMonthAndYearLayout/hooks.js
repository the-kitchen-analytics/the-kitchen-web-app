import { useCallback, useMemo } from 'react'
import { findAllByMonthAndYear } from '../../../domain/receipt'
import { useFetchData, useLastWorkedDayContext, useUserDetailsContext } from '../../../shared/hooks'

export const useInitialMonthAndYear = () => {
  const initialDate = useLastWorkedDayContext()

  return useMemo(() => ({
    month: initialDate.getMonth(),
    year: initialDate.getFullYear()
  }), [initialDate])
}

export const useReceipts = ({ month, year }) => {
  const [{ uid }] = useUserDetailsContext()

  const fetchFn = useCallback(() => findAllByMonthAndYear(uid, month, year), [uid, month, year])

  return useFetchData(fetchFn)
}