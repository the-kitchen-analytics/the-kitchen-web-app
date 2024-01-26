import { useSessionStorage } from '../../../shared/hooks'

const INITIAL_ACCORDION_INDEX_KEY = 'accordionActiveIndex'
export const INITIAL_ACCORDION_INDEX_VALUE = -1

export const useAccordionActiveIndex = () => {
  const [value, setValue] = useSessionStorage(INITIAL_ACCORDION_INDEX_KEY, INITIAL_ACCORDION_INDEX_VALUE)
  const reset = () => setValue(INITIAL_ACCORDION_INDEX_VALUE)

  return [value, setValue, reset]
}