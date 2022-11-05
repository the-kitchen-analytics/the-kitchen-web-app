const mapFirebaseEntityToProcedure = (firebaseEntity) => {
    const entryData = firebaseEntity.data();

    return Object.freeze({
        id: firebaseEntity.id,
        name: entryData.name,
        type: entryData.type,
        price: entryData.price,
        workerCategory: entryData.workerCategory,
        workerIncome: entryData.workerIncome,
        dateCreated: entryData.dateCreated,
        lastUpdated: entryData.lastUpdated,
    });
}

export default mapFirebaseEntityToProcedure;