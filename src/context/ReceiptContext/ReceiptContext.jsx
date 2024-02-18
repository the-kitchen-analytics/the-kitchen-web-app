import { createContext, useCallback } from 'react'
import { Loader } from '../../shared/components'
import { useReceipts } from './useReceipts'

export const ReceiptContext = createContext({})
export const ReceiptContextProvider = ({ uid, limit, children }) => {

  const [data, isLoading, error] = useReceipts({ uid, limit })

  const getReceiptById = useCallback((id) => {
    if (isLoading || error || !data) {
      console.error('Failed to get receipt by id', data, isLoading, error)
      return null
    }

    return data.receipts.find((receipt) => receipt.id === id)
  }, [data])

  if (isLoading) {
    return <Loader content={'Загрузка данных о процедурах'} />
  }

  return (
    <ReceiptContext.Provider value={{ ...data, getReceiptById, isLoading, error }}>
      {
        children
      }
    </ReceiptContext.Provider>
  )
}