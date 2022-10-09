import {
    addDoc,
    collection,
    query,
    where,
    getDocs,
} from "firebase/firestore";

import { db } from "../config/firebase";
import { PROCEDURES } from "../config/firebaseCollectionNames";
import { deleteAll, getDocsData } from "../utils/firebase";

const getCollection = () => {
    return collection(db, PROCEDURES);
}

export const getAllProcedures = async () => {
    console.debug('getAllProcedures');

    const snapshot = await getCollection().get();

    return getDocsData(snapshot);
}

export const addProcedure = (procedure) => {
    console.debug('addProcedure', procedure);
    return addDoc(getCollection(), procedure);
}

export const addAllProcedures = (procedures) => {
    console.debug('addAllProcedures', procedures);

    const collection = getCollection();

    return procedures.map(procedure => addDoc(collection, procedure));
}

export const getProceduresByWorkerCategory = async (workerCategory) => {
    console.debug('getProceduresByWorkerCategory', workerCategory);

    const q = query(getCollection(), where("workerCategory", "==", workerCategory));
    const snapshot = await getDocs(q);

    return getDocsData(snapshot);
}

export const deleteAllProcedures = async () => {
    console.debug('deleteAllProcedures');


    console.debug('getAllProcedures');
    const q = query(getCollection());
    const resultSet = await getDocs(q);

    deleteAll(resultSet.docs);
}