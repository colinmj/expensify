db.ref('notes').push({
  title: 'music',
  body: 'play some guitfiddle'
});
db.ref().on('value', ohSnap => {
  const val = ohSnap.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});

////////////

db
  .ref()
  .once('value')
  .then(snapshot => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch(e => {
    console.log('Error', e);
  });

db
  .ref()
  .set({
    name: 'Colin Matson-Jones',
    age: 26,
    stressLevel: 5,
    job: {
      title: 'Musician',
      company: 'Myself guy'
    },
    isSexy: true,
    location: {
      city: 'Vancouver',
      country: 'Canad'
    }
  })
  .then(() => {
    console.log('data is saved');
  })
  .catch(error => {
    console.log(error);
  });

db.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Toronto'
});

// db.ref('notes').push({
//   title: 'music',
//   body: 'play some guitfiddle'
// });

db.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 53000,
  createdAt: 345934583458
});

// db
//   .ref('expenses')
//   .once('value')
//   .then(snap => {
//     let expenses = [];
//     snap.forEach(lilSnap => {
//       expenses.push({
//         id: lilSnap.key,
//         ...lilSnap.val()
//       });
//     });
//     console.log(expenses);
//   });

// db.ref('expenses').on('child_removed', snap => {
//   console.log(snap.key, snap.val());
// });

db.ref('expenses').on('child_changed', snap => {
  console.log(snap.key, snap.val());
});

db.ref('expenses').on('child_added', snap => {
  console.log(snap.key, snap.val());
});

db.ref('expenses').on('value', snap => {
  let expenses = [];
  snap.forEach(lilSnap => {
    expenses.push({
      id: lilSnap.key,
      ...lilSnap.val()
    });
  });
  console.log(expenses);
});

const firebaseNotes = {};

db.ref().on('value', ohSnap => {
  const val = ohSnap.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});
