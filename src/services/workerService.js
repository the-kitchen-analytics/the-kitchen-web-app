import {
    query,
    where,
    addDoc,
    collection,
    getDoc,
    getDocs,
    doc,
    setDoc,
    deleteDoc,
} from "firebase/firestore"
import { db } from "../config/firebase"
import { WORKERS } from "../data/firebaseCollectionNames"

const collectionWrapper = () => {
    return collection(db, WORKERS);
}

const docWrapper = (id) => {
    return doc(db, WORKERS, id);
}

export const getWorkerByUid = async (uid) => {
    console.debug('getWorkerByUid', uid);
    const q = query(collectionWrapper(), where("uid", "==", uid));

    const resultSet = await getDocs(q);

    if (!resultSet.empty) {
        const snapshot = query.docs[0];
        return snapshot.data();
    }

    return null;
}

export const getWorkerByUserRef = async (userRef) => {
    console.debug('getWorkerByUserRef', userRef);
    const q = query(collectionWrapper(), where("userRef", "==", userRef));

    const resultSet = await getDocs(q);

    if (!resultSet.empty) {
        const snapshot = query.docs[0];
        return snapshot.data();
    }

    return null;
}

export const getWorker = (id) => {
    console.debug('getWorker', id);
    return getDoc(docWrapper(id));
}

export const createWorker = (data) => {
    console.debug('createWorker', data);
    return addDoc(collectionWrapper(), data);
}

export const updateWorker = (id, payload) => {
    console.debug('updateWorker', id, payload);
    setDoc(docWrapper(id), payload);
}

export const deleteWorker = (worker) => {
    console.debug('deleteWorker', worker);
    return deleteDoc(worker);
}
