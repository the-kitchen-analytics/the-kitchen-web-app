import { useFetchData } from './index'
import { getProceduresV2ByWorkerCategory } from '../services/proceduresServiceV2'
import { useCallback } from 'react'

export const useProcedures = (workerCategory) => {
  const fetchFunction = useCallback(() => getProceduresV2ByWorkerCategory(workerCategory), [workerCategory])

  const { data } = useFetchData(fetchFunction)

  return Array.isArray(data)
    ? data
    : []
}