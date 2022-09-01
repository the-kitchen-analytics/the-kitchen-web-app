import { getRandomElement } from "../utils/ArrayUtil";

const colors = Object.freeze(['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
    'violet', 'purple', 'pink', 'brown', 'grey', 'black'])

const fancyColorNames = Object.freeze(['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
    'violet', 'purple', 'pink'])

const getRandomColorName = () => colors[getRandomElement(colors)]

const getRandomFancyColorName = () => fancyColorNames[getRandomElement(fancyColorNames)]

export {
    fancyColorNames,
    getRandomColorName,
    getRandomFancyColorName
}