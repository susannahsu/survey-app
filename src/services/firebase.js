import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "../lib/firebase";

const db = getFirestore(app);

export async function createSurvey(surveyObject) {
  // Add a new document in collection "surveys"
  await addDoc(collection(db, "surveys"), surveyObject);
}
