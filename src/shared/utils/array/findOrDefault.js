export const findOrDefault = (array, predicate, defaultValue) =>
  array.find(predicate) || defaultValue