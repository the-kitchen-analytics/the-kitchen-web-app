import { useCallback, useMemo } from 'react'
import colors from '../data/ui/colors.json'
import { getRandomArrayElement } from '../utils/array'

const useColorNames = () => {
  const fancyColorNames = useMemo(() => colors
    .filter(({ isFancy }) => isFancy)
    .map(({ name }) => name), [])

  const colorNames = useMemo(() => colors
    .map(({ name }) => name), [])

  const getRandomColorName = useCallback(() => getRandomArrayElement(colorNames), [colorNames])

  const getRandomFancyColorName = useCallback(() => getRandomArrayElement(fancyColorNames), [fancyColorNames])

  return {
    fancyColorNames,
    colorNames,
    getRandomColorName,
    getRandomFancyColorName
  }
}

export default useColorNames