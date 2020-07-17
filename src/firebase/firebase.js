import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: 'https://expensify-test-a2159.firebaseio.com',
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// const expensesRef = database.ref('expenses');

// child_removed "event"
// expensesRef.on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_changed "event"
// expensesRef.on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_added "event" (doesn't just get called for new children, also gets called once for each existing children)
// expensesRef.on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// expensesRef.once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnap) => {
//             expenses.push({
//                 id: childSnap.key,
//                 ...childSnap.val()
//             });
//         });
//         console.log(expenses);
//     });

    // expensesRef.on(
    //     'value', 
    //     (snapshot) => {
    //         const expenses = [];
    //         snapshot.forEach((childSnap) => {
    //             expenses.push({
    //                 id: childSnap.key,
    //                 ...childSnap.val()
    //             });
    //         });
    //         console.log(expenses);
    //     }, 
    //     (error) => {
    //         console.log('something went wrong:', error);
    //     }
    // );

// const expenses = [
//     {description: 'Rent', amount: 50000, createdAt: 0, note: ''},
//     {description: 'Cable Bill', amount: 4000, createdAt: 0, note: ''},
//     {description: 'Water Bill', amount: 3500, createdAt: 0, note: ''},
// ];

// expenses.forEach(expense => expensesRef.push(expense));


// firebase does not store arrays
// only stores objects. To create auto id of an object use .push()

// database.ref('notes').push({
//     title: 'My Other Note',
//     body: 'Something something'
// })

// update based on the auto generated id
// database.ref('notes/-MCS4uxXEW5Xbtu81yjd')
//     .update({
//         body: 'eat'
//     })

// database.ref()
//     .on('value', (snapshot) => {
//         const person = snapshot.val();
//         console.log(`${person.name} is a ${person.job.title} at ${person.job.company}.`);
//     })


// const onValueChange = database.ref()
//     .on('value', (snapshot) => { // this subscribes to data changes, callback called everytime data changes
//         console.log(snapshot.val());
//     }, (error) => {
//         console.log('data fetching error', error);
//     });

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 3500);

    // note: unsubscribe using .off()
    // database.ref().off()
    // however changes will still fire, the callback in on() just won't fire


// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })
//     .catch((error) => {
//         console.log('Error fetching data', error);
//     });

// database.ref().set({
//     name: 'Bat Man',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Microsoft'
//     },
//     location: {
//         city: 'Gotham',
//         country: 'US'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((error) => {
//     console.log('this failed', error);
// });

// database.ref()
//     .update({
//         stressLevel: 9,
//         'job/company': 'Amazon',
//         'location/city': 'Seattle'
//     })
//     .then(() => {
//         console.log('date is updated');
//     })
//     .catch((error) => {
//         console.log('error updating: ', error);
//     });


// database.ref().update({
//     job: 'Super hero',
//     'location/city': 'Toronto' // Update city without deleting country, note the slash and quotes!
// });

// database.ref().update({
//     job: 'Super hero',
//     location: {
//         city: 'Toronto' // NOTE: this call will remove country!!!
//     }
// });

// database.ref().update({
//     name: 'Cat Woman',
//     age: 22,
//     job: 'Super hero',
//     isSingle: null // update can also remove with null
// })

// database.ref('isSingle').set(null); // alternative way to remove data

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('isSingle removed successfully');
//     })
//     .catch((error) => {
//         console.log('something went wrong when removing isSingle ', error);
//     });
