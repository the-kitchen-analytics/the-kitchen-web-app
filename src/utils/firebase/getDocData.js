export const getDocData = (doc) => {
  return { id: doc.id, ...doc.data() }
}