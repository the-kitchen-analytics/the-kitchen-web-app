import { useMemo } from 'react'
import { useFetchData } from './index'
import { getProceduresByWorkerCategory } from '../services/proceduresService'
import { getProceduresV2ByWorkerCategory } from '../services/proceduresServiceV2'

const useProcedures = (workerCategory, useNewProcedures = false) => {
  const fetchFunction = useMemo(() => useNewProcedures
    ? () => getProceduresV2ByWorkerCategory(workerCategory)
    : () => getProceduresByWorkerCategory(workerCategory),
  [useNewProcedures, workerCategory])

  const { data } = useFetchData(fetchFunction)

  return Array.isArray(data)
    ? data
    : []
}

export default useProcedures