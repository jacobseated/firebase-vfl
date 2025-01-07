import { getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

// Import the initialized Firestore instance from main.js
import { initializeApp } from "firebase/app";

// Firebase Config
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

// --------------
// CRUD Functions
// --------------
export async function createDocument(collectionName, docId, data) {
  try {
    await setDoc(doc(db, collectionName, docId), data);
    console.log("Document created:", docId);
  } catch (error) {
    console.error("Error creating document:", error);
  }
}

export async function readDocument(collectionName, docId) {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error reading document:", error);
  }
}

export async function updateDocument(collectionName, docId, updatedData) {
  try {
    await updateDoc(doc(db, collectionName, docId), updatedData);
    console.log("Document updated:", docId);
  } catch (error) {
    console.error("Error updating document:", error);
  }
}

export async function deleteDocument(collectionName, docId) {
  try {
    await deleteDoc(doc(db, collectionName, docId));
    console.log("Document deleted:", docId);
  } catch (error) {
    console.error("Error deleting document:", error);
  }
}