import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDL5YAW-aCf7LfGwD-U0SEahF2wwIp2P98",
    authDomain: "expensify-6cd0a.firebaseapp.com",
    databaseURL: "https://expensify-6cd0a.firebaseio.com",
    projectId: "expensify-6cd0a",
    storageBucket: "expensify-6cd0a.appspot.com",
    messagingSenderId: "292082249969"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  //child_removed
  database.ref('expenses').on('child_removed', (snapshot) => {

  })
  //child_changed
  database.ref('expenses').on('child_changed', (snapshot) => {

  })
  //child_added

  database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
  });

database.ref('expenses').push({
        description: 'food',
        note : 'bought food',
        amount : '1842903',
        createdAt : 95812318023
})


// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses)
// });