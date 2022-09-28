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
    serverTimestamp,
    orderBy,
    onSnapshot,
} from "firebase/firestore"
import _ from "lodash";
import { db } from "../config/firebase"
import { RECEIPTS } from "../data/firebaseCollectionNames"
import { formatDate, parseDateFromDropdown } from "../utils/date";

const collectionWrapper = () => {
    return collection(db, RECEIPTS);
}

const docWrapper = (id) => {
    return doc(db, RECEIPTS, id);
}

export const streamReceiptsByUid = (uid, snapshot, error) => {
    console.debug('streamReceiptsByUid', uid);
    const q = query(collectionWrapper(), where("uid", "==", uid), orderBy('date', 'desc'));
    return onSnapshot(q, snapshot, error);
};

export const getAllReceiptsByUid = (uid) => {
    console.debug('getAllReceiptsByMasterUid', uid);
    const q = query(collectionWrapper(), where("uid", "==", uid), orderBy('date', 'desc'));
    return getDocs(q);
}

export const getReceipt = (id) => {
    console.debug('getReceipt', id);
    return getDoc(docWrapper(id));
}

export const createReceipt = (data) => {
    console.debug('createReceipt', data);
    return addDoc(collectionWrapper(), data);
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

export const convertFormDataToReceipt = (formData) => {
    const { date, procedures, uid } = formData;

    const data = Object.freeze({
        uid,
        procedures,
        date: parseDateFromDropdown(date),
        totalPriceBeforeTaxes: _.sumBy(procedures, 'priceBeforeTaxes'),
        totalPriceAfterTaxes: _.sumBy(procedures, 'priceAfterTaxes'),
        dateCreated: serverTimestamp(),
    });

    return data;
}

export const convertFirebaseData = (firebaseDataEntry) => {
    const entryData = firebaseDataEntry.data();
    return {
        ...entryData,
        dateCreated: entryData.dateCreated.toDate(),
        date: entryData.date.toDate(),
        dateFormatted: formatDate(entryData.date.toDate()),
    }
}