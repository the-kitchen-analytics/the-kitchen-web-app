import workerCatgoriesJson from '../../data/workerCategories.json'

const getWorkerCategoryDisplayName = (name) => {
  return workerCatgoriesJson.find(it => it.name === name)?.displayName
}

export default getWorkerCategoryDisplayName