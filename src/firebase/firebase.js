import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyC2XsFnoM6q_PZNPMB5rXHt7HWDHiOa46I",
  authDomain: "expensify-bb52b.firebaseapp.com",
  databaseURL: "https://expensify-bb52b.firebaseio.com",
  projectId: "expensify-bb52b",
  storageBucket: "expensify-bb52b.appspot.com",
  messagingSenderId: "1019429388814",
  appId: "1:1019429388814:web:b18d1ed55b18643220b25f",
  measurementId: "G-HDTD194Q48"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: "twoja stara labadziara",
  age: 26,
  isSingle: true,
  location: {
    city: "Poznań",
    country: "Polska"
  },
  myNumbers: [1, 2, 3, 4, 5, 6, 7, "kopytko"]
});

database.ref("attributes").set({
  height: 174,
  weight: 85
});
