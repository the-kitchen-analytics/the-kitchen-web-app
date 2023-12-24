import { getProceduresV2ByWorkerCategory } from '../services/proceduresServiceV2'
import { useCallback,  } from 'react'
import { useFetchData } from './useFetchData'

export const useProcedures = (workerCategory) => {
  const fetchFunction = useCallback(() => getProceduresV2ByWorkerCategory(workerCategory), [workerCategory])

  const { data, isLoading, hasError } = useFetchData(fetchFunction)

  return [data, isLoading, hasError]
}

// export const useProcedures = (options) => {
//   const { workerCategory } = options
//
//   const [data, setData] = useState()
//   const [error, setError] = useState()
//   const [isLoading, setIsLoading] = useState(true)
//
//   useEffect(() => {
//     return subscribe(workerCategory,
//       (querySnapshot) => {
//         setIsLoading(true)
//
//         const data = getDocsData(querySnapshot)
//         console.debug('procedures', workerCategory, data)
//
//         setData(data)
//         setIsLoading(false)
//       },
//       error => {
//         setError(error)
//         setIsLoading(false)
//       }
//     )
//   }, [workerCategory])
//
//   return [data, isLoading, error]
// }