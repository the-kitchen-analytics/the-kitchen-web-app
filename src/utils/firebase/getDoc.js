import { doc } from "firebase/firestore";
import { db } from "../../config/firebase";

const getDoc = (path, id) => {
    return doc(db, path, id);
}

export default getDoc;