const getDocData = (doc) => {
  return { id: doc.id, ...doc.data() }
}

export default getDocData