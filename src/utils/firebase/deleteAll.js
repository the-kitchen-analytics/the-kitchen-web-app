import { deleteDoc } from 'firebase/firestore'

const deleteAll = (docs) => {
  return docs.map(({ ref }) => deleteDoc(ref))
}

export default deleteAll