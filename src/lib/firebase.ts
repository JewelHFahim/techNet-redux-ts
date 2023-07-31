// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);


import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBAX2MYrlpJFu4BoLBI_9dRVIEYPG6x_I8",
  authDomain: "technet-58eee.firebaseapp.com",
  projectId: "technet-58eee",
  storageBucket: "technet-58eee.appspot.com",
  messagingSenderId: "9558544283",
  appId: "1:9558544283:web:4f5a891c681cb4af145b3e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);