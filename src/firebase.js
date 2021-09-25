import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "@firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCf5PV_6MfAHdqYXvHWM28wkAX-ZIBjLrE",
  authDomain: "suppli-eb7c6.firebaseapp.com",
  projectId: "suppli-eb7c6",
  databaseURL: "https://suppli-eb7c6-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "suppli-eb7c6.appspot.com",
  messagingSenderId: "619614910484",
  appId: "1:619614910484:web:fa5d1fe15d42051ced4f01",
  measurementId: "G-FQ5XP27T01"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const analytics = getAnalytics(app);

 export default app;