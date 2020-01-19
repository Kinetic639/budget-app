import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC2XsFnoM6q_PZNPMB5rXHt7HWDHiOa46I",
  authDomain: "expensify-bb52b.firebaseapp.com",
  databaseURL: "https://expensify-bb52b.firebaseio.com",
  projectId: "expensify-bb52b",
  storageBucket: "expensify-bb52b.appspot.com",
  messagingSenderId: "1019429388814",
  appId: "1:1019429388814:web:b18d1ed55b18643220b25f",
  measurementId: "G-HDTD194Q48"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
database.ref().set({
  name: "Michał Stępień",
  age: 26,
  isSingle: true,
  location: {
    city: "Poznań",
    country: "Poland"
  }
});

database.ref("attributes").set({ height: "174cm", weight: "85kg" });

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.7.0/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // Initialize Firebase
//   firebase.analytics();
// </script>
