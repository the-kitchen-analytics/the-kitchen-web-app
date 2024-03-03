import { useCallback, useMemo } from 'react'
import { useFetchData, useUserDetailsContext } from '../../../shared/hooks'
import { findAllByDate, getNextWorkedDay, getPreviousWorkedDay } from '../../../domain/receipt'
import { areDatesEqual } from '../../../shared/utils'

export const useReceipts = (date) => {
  const [{ uid }] = useUserDetailsContext()

  const fetchFn = useCallback(() => findAllByDate(uid, date), [uid, date])

  return useFetchData(fetchFn)
}

const useLeftButton = (uid, date, setDate) => {
  const fetchPrevDay = useCallback(() => getPreviousWorkedDay(uid, date), [uid, date])
  const [value, loading] = useFetchData(fetchPrevDay)

  return {
    loading,
    disabled: loading || !value,
    onClick: () => setDate(value)
  }
}

const useRightButton = (uid, date, setDate) => {
  const fetchNextDay = useCallback(() => getNextWorkedDay(uid, date), [uid, date])
  const [value, loading] = useFetchData(fetchNextDay)

  return {
    loading,
    disabled: loading || !value,
    onClick: () => setDate(value)
  }
}

export const useCarousel = (initialDate, date, setDate) => {
  const [{ uid }] = useUserDetailsContext()
  const leftButton = useLeftButton(uid, date, setDate)
  const rightButton = useRightButton(uid, date, setDate)

  const resetButton = useMemo(() => ({
    content: 'Последний день',
    disabled: areDatesEqual(date, initialDate),
    onClick: () => setDate(initialDate)
  }), [initialDate, date, setDate])

  return useMemo(() => ({
    leftButton,
    rightButton,
    resetButton
  }), [leftButton, resetButton, rightButton])
}