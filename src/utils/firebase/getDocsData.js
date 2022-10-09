import getDocData from "./getDocData";

const getDocsData = (snapshot) => {
    if (snapshot.empty) {
        return [];
    }

    return snapshot.docs.map(getDocData)
}

export default getDocsData;