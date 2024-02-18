import { ReceiptContextProvider } from '../../context'
import { Outlet, useOutletContext } from 'react-router-dom'

export const ReceiptContexLayout = () => {
  const { user } = useOutletContext()

  return (
    <ReceiptContextProvider
      uid={user.uid}
      limit={10}
    >
      <Outlet context={{ user }} />
    </ReceiptContextProvider>
  )
}