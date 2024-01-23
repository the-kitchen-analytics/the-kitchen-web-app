import workerCatgoriesJson from '../../../data/workerCategories.json'

export const getWorkerCategoryDisplayName = (name) => {
  return workerCatgoriesJson.find(it => it.name === name)?.displayName
}