// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDe5GqHEGILyH41z07Ci2GRxNvHBZyjR-0',
    authDomain: 'reactjournalapp-1f4c3.firebaseapp.com',
    projectId: 'reactjournalapp-1f4c3',
    storageBucket: 'reactjournalapp-1f4c3.appspot.com',
    messagingSenderId: '825022045001',
    appId: '1:825022045001:web:f9c5f5d5b6ee41e95c9898',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
