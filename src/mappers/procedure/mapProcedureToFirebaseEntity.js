const mapProcedureToFirebaseEntity = (procedure) => {
    const now = new Date();

    return Object.freeze({
        name: procedure.name,
        type: procedure.type,
        workerCategory: procedure.workerCategory,
        price: procedure.price,
        workerIncome: procedure.workerIncome,
        dateCreated: procedure.dateCreated || now,
        lastUpdated: now,
    });
};

export default mapProcedureToFirebaseEntity;