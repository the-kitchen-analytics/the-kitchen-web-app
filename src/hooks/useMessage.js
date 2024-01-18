import { useState } from 'react'

export const useMessage = (initialMessage) => {
  const [message, setMessage] = useState(initialMessage)

  return [message, setMessage, () => setMessage(null)]
}