import { createContext } from 'react'
import { Loader } from '../../shared/components'
import { useLastWorkedDay } from './useLastWorkedDay'
import { atStartDay, getCurrentDate } from '../../shared/utils'

const DEFAULT_VALUE = getCurrentDate()

export const LastWorkedDayContext = createContext({})
export const LastWorkedDayContextProvider = ({ children }) => {

  const [lastWorkedDay, loading] = useLastWorkedDay()

  if (loading) {
    return (
      <Loader
        indeterminate
        content={'Поиск последнего рабочего дня'}
      />
    )
  }

  const value = atStartDay(lastWorkedDay || DEFAULT_VALUE)

  return (
    <LastWorkedDayContext.Provider value={value}>
      {
        children
      }
    </LastWorkedDayContext.Provider>
  )
}