import colors from '../../../data/ui/colors.json'
import { getRandomArrayElement } from '../'

export const colorNames = colors.map(({ name }) => name)
export const fancyColorNames = colors.filter(({ isColorful }) => isColorful)
  .map(({ name }) => name)

export const getRandomColorName = () => getRandomArrayElement(colorNames)

export const getRandomFancyColorName = () => getRandomArrayElement(fancyColorNames)

export const getColorNameByIndex = (i, colorNames = fancyColorNames) => colorNames[i % fancyColorNames.length]

export const getHexByColorName = (name) => colors
  .find(it => it.name === name).hex
