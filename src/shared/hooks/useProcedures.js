import { useCallback } from 'react'
import { getProceduresV2ByWorkerCategory } from '../../domain/procedure'
import { useFetchData } from './useFetchData'

export const useProcedures = (workerCategory) => {
  const fetchFunction = useCallback(() => getProceduresV2ByWorkerCategory(workerCategory), [workerCategory])

  const { data, isLoading, hasError } = useFetchData(fetchFunction)

  return [data, isLoading, hasError]
}