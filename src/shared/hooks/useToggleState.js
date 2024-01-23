import { useState } from 'react'

export const useToggleState = (initialValue = false) => {
  const [state, setState] = useState(initialValue)

  return [
    state,
    () => setState(prevState => !prevState),
    setState,
  ]
}