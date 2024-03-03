import { useCallback } from 'react'
import { useFetchData, useUserDetailsContext } from '../../shared/hooks'
import { getLastWorkedDay } from '../../domain/receipt'

export const useLastWorkedDay = () => {
  const [{ uid }] = useUserDetailsContext()
  const fetchLastWorkedDay = useCallback(() => getLastWorkedDay(uid), [uid])
  return useFetchData(fetchLastWorkedDay)
}