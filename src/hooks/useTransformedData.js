import { useState, useEffect } from 'react'
import _ from 'lodash'

const useTransformedData = (rawData) => {

  const [groupedData, setGroupedData] = useState({})
  const [workedDays, setWorkedDays] = useState([])
  const [isDataTransformed, setIsDataTransformed] = useState(false)

  useEffect(() => {
    if (rawData) {
      const groupedData = _.groupBy(rawData, 'dateFormatted')
      const workedDays = [...Object.keys(groupedData)]

      setGroupedData(groupedData)
      setWorkedDays(workedDays)
      setIsDataTransformed(true)
    }

  }, [rawData])

  return {
    groupedData,
    workedDays,
    isDataTransformed
  }
}

export default useTransformedData