import { getDocData } from './'

export const getDocsData = (snapshot) => {
  if (snapshot.empty) {
    return []
  }

  return snapshot.docs.map(getDocData)
}