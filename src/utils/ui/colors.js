import colors from '../../data/ui/colors.json'
import { getRandomArrayElement } from '../'

export const colorNames = colors.map(({ name }) => name)
export const fancyColorNames = colors.filter(({ isFancy }) => isFancy)
  .map(({ name }) => name)

export const getRandomColorName = () => getRandomArrayElement(colorNames)

export const getRandomFancyColorName = () => getRandomArrayElement(fancyColorNames)

