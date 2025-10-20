// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsGy3md-Xz-1phbitoDxrsWc9lpbO2k3I",
  authDomain: "chatapp-bb352.firebaseapp.com",
  projectId: "chatapp-bb352",
  storageBucket: "chatapp-bb352.firebasestorage.app",
  messagingSenderId: "368454341743",
  appId: "1:368454341743:web:a172df5495ad68374ae99a",
  measurementId: "G-L1RPCRXK1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig