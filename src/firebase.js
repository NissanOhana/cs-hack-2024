/*
Check Firestore section on Installations.md
*/

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyALSyKlFBiIi1Xi95ngF2o3ugSogfmdvMk',
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
