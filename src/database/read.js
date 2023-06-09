import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

export async function load() {

    try {
        const querySnapshot = await getDocs(collection(db, "products"));
        return processQuerySnapshot(querySnapshot);
    }
    catch (error) {
        throw new Error('Failed to load the database.');
    }
    
}

function processQuerySnapshot(querySnapshot) {
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({
            ...doc.data(),
            id: doc.id
        });
    });
    return data;
}