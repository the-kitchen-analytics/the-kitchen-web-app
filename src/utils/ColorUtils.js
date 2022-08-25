import { getRandomElement } from "../utils/ArrayUtil";

const colors = Object.freeze(['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
    'violet', 'purple', 'pink', 'brown', 'grey', 'black'])

const fancyColors = Object.freeze(['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
    'violet', 'purple', 'pink'])

const getRandomColorName = () => colors[getRandomElement(colors)]

const getRandomFancyColorName = () => fancyColors[getRandomElement(fancyColors)]

export {
    getRandomColorName,
    getRandomFancyColorName
}