import { getRandomElement } from "../utils/ArrayUtil";

const colors = Object.freeze(['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
    'violet', 'purple', 'pink', 'brown', 'grey', 'black'])

const getRandomColorName = () => colors[getRandomElement(colors)];

export {
    getRandomColorName
}