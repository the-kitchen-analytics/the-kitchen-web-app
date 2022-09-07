import { allColorNames } from "../../data/colorNames"
import { getRandomArrayElement } from "../array"

const getRandomColorName = () => getRandomArrayElement(allColorNames)
export default getRandomColorName