import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAgPi7q__2itpWlSz_pDPBX6XDMwcm2gtY",
    authDomain: "fir-5aef1.firebaseapp.com",
    projectId: "fir-5aef1",
    storageBucket: "fir-5aef1.appspot.com",
    messagingSenderId: "428836499377",
    appId: "1:428836499377:web:26e1bd6017db08d1d55790"
  };

  const app = initializeApp(firebaseConfig)

 export const auth = getAuth(app)