const getRandomArrayIndex = (array = []) => Math.floor(Math.random() * array.length)

export const getRandomArrayElement = (array) => array[getRandomArrayIndex(array)]