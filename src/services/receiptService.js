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
    orderBy,
    onSnapshot,
} from "firebase/firestore"
import { db } from "../config/firebase"
import { RECEIPTS } from "../config/firebaseCollectionNames"

const getCollection = () => {
    return collection(db, RECEIPTS);
}

const docWrapper = (id) => {
    return doc(db, RECEIPTS, id);
}

export const streamReceiptsByUid = (uid, snapshot, error) => {
    console.debug('streamReceiptsByUid', uid);
    const q = query(getCollection(), where("uid", "==", uid), orderBy('date', 'desc'));
    return onSnapshot(q, snapshot, error);
};

export const getAllReceiptsByUid = (uid) => {
    console.debug('getAllReceiptsByMasterUid', uid);
    const q = query(getCollection(), where("uid", "==", uid), orderBy('date', 'desc'));
    return getDocs(q);
}

export const getReceipt = (id) => {
    console.debug('getReceipt', id);
    return getDoc(docWrapper(id));
}

export const createReceipt = (data) => {
    console.debug('createReceipt', data);
    return addDoc(getCollection(), data);
}

export const updateReceipt = (id, payload) => {
    console.debug('updateReceipt', id, payload);
    setDoc(docWrapper(id), payload);
}

export const deleteReceipt = (receipt) => {
    console.debug('deleteReceipt', receipt);
    return deleteDoc(receipt);
}

export const deleteReceipts = (receipts) => {
    console.debug('deleteReceipts', receipts);
    receipts.map(receipt => deleteDoc(receipt.ref))
}

export const deleteAllReceiptByUid = (uid) => {
    console.debug('deleteAllReceiptByUid', uid);

    getAllReceiptsByUid(uid)
        .then((resultSet) => deleteReceipts(resultSet.docs));
}