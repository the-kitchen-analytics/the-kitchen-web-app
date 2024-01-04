import { useSessionStorage } from '../../../../../hooks'
import { formatDateForDatePicker, getCurrentDate } from '../../../../../utils'
import { useMemo } from 'react'

const INITIAL_RECEIPT = Object.freeze({
  date: formatDateForDatePicker(getCurrentDate()),
  procedures: []
})

const STORAGE_KEY = 'submitFormData'

export const useReceipt = (uid) => {
  const initialReceipt = useMemo(() => ({ ...INITIAL_RECEIPT,uid }), [uid])
  return [...useSessionStorage(STORAGE_KEY, initialReceipt), initialReceipt]
}