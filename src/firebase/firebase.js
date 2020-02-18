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

export { firebase, database as default };

// database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// // Setup data sub -> Andrew is a Software Developer at Amazon.

// // Change the data and make sure it reprints

// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e);
// //   });

// database
//   .ref()
//   .set({
//     name: "Andrew Mead",
//     age: 26,
//     stressLevel: 6,
//     job: {
//       title: "Software developer",
//       company: "Google"
//     },
//     location: {
//       city: "Philadelphia",
//       country: "United States"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved!");
//   })
//   .catch(e => {
//     console.log("This failed.", e);
//   });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });

// // database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log('Data was removed');
// //   }).catch((e) => {
// //     console.log('Did not remove data', e);
// //   });
