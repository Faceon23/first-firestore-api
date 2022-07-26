import { initializeApp, cert, getApps } from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";
import { credentials } from "../credentials.js";

export function dbConnect() {
    if (!getApps().length) {   // reengages connection when connection is lost
    initializeApp({
        credential: cert(credentials)
    });
}
return getFirestore();
}