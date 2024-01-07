// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {initializeAuth, getReactNativePersistence, getAuth} from "firebase/auth"
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyDeKu7_Cn39rcydDlnt8sF7OBIZ81A0MbQ",
  authDomain: "coffeetime-c8a91.firebaseapp.com",
  databaseURL: "https://coffeetime-c8a91-default-rtdb.firebaseio.com",
  projectId: "coffeetime-c8a91",
  storageBucket: "coffeetime-c8a91.appspot.com",
  messagingSenderId: "364901408096",
  appId: "1:364901408096:web:be28e8d3618414ad689205",
  measurementId: "G-42V0W1VMPK"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const database = getDatabase(app);

export {auth, database}
