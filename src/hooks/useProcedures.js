import { useState, useEffect } from 'react'
import { mapFirebaseEntityToProcedure } from '../mappers/procedure'
import { streamProcedures } from '../services/proceduresService'


const useProcedures = () => {

  const [procedures, setProcedures] = useState([])
  const [, setIsLoading] = useState(false)
  const [, setError] = useState()

  useEffect(() => {
    const unsubscribe = streamProcedures(
      (querySnapshot) => {
        setIsLoading(true)

        setProcedures(querySnapshot.docs.map(mapFirebaseEntityToProcedure))

        setIsLoading(false)
      },
      error => {
        setError(error)
        setIsLoading(false)
      }
    )
    return unsubscribe
  }, [])

  return procedures
}

export default useProcedures