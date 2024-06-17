/*
Check Firestore section on Installations.md
*/

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

/*
Environment Variables: These are key-value pairs that can influence the way running processes will behave on a computer. 
For applications, they provide a way to set configuration and secrets (like API keys) outside of the application code.

.env File: This is a simple text file in which environment variables are defined. 
It's typically used in development to store configuration settings that shouldn't be hard-coded in the application.
*/

const apiKey = import.meta.env.API_KEY;
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: 'cs-hack-2024.firebaseapp.com',
  projectId: 'cs-hack-2024',
  storageBucket: 'cs-hack-2024.appspot.com',
  messagingSenderId: '81389435256',
  appId: '1:81389435256:web:773debd4dd38fa6156b08d',
  measurementId: 'G-YKXBLWR6MY',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
