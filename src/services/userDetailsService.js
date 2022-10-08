import {
    addDoc,
    collection,
    query,
    where,
    getDocs,
    updateDoc,
} from "firebase/firestore";

import { db } from "../config/firebase";

export const getCollection = () => {
    return collection(db, "userDetails");
}

export const getUserDetailsByUid = async (uid) => {
    console.debug('getUserDetailsByUid', uid);

    const q = query(getCollection(), where("uid", "==", uid));
    const resultSet = await getDocs(q);

    if (!resultSet.empty) {
        return resultSet.docs[0];
    }

    throw new Error(`Not found userDetails with uid: ${uid}`);
}

export const createUserDetails = (userDetails) => {
    console.debug('createUserDetails', userDetails);
    return addDoc(getCollection(), userDetails);
}

export const updateUserDetails = async (ref, payload) => {
    return updateDoc(ref, payload);
}