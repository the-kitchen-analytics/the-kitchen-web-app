import workerCatgoriesJson from '../../../data/worker-categories.json'

export const getWorkerCategoryDisplayName = (name) => {
  return workerCatgoriesJson.find(it => it.name === name)?.displayName
}