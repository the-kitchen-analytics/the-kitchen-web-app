import { useSessionStorage } from '../../../../../hooks'

const INITIAL_ACCORDITION_INDEX_KEY = 'accorditionActiveIndex'
export const INITIAL_ACCORDITION_INDEX_VALUE = -1

export const useAccordionActiveIndex = () => {
  const [value, setValue] = useSessionStorage(INITIAL_ACCORDITION_INDEX_KEY, INITIAL_ACCORDITION_INDEX_VALUE)
  const reset = () => setValue(INITIAL_ACCORDITION_INDEX_VALUE)

  return [value, setValue, reset]
}