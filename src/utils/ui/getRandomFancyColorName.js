import { fancyColorNames } from "../../data/colorNames"
import { getRandomArrayElement } from "../array"

const getRandomFancyColorName = () => getRandomArrayElement(fancyColorNames)
export default getRandomFancyColorName