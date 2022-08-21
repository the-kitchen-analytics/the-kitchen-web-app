const sum = (arr = []) => arr.reduce((partialSum, currentValue) => partialSum + currentValue, 0);

const groupByKey = (list, key, keyTransformer = key => key) =>
    list.reduce((hash, obj) =>
        ({ ...hash, [keyTransformer(obj[key])]: (hash[keyTransformer(obj[key])] || []).concat(obj) }), {});

const getRandomArrayIndex = (array = []) => Math.floor(Math.random() * array.length);

export {
    sum,
    groupByKey,
    getRandomArrayIndex as getRandomElement
}