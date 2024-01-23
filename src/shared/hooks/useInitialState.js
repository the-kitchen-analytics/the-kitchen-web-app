import { useState } from 'react'

export const useInitialState = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  return [value, setValue, () => setValue(initialValue)]
}