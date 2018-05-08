// const person = {
//   name: 'Colin',
//   age: 26,
//   location: {
//     city: 'Vancouver',
//     temp: 12
//   }
// };

// const { name = 'Hitler', age } = person; //default value
// const { city, temp: temperature } = person.location; //hype renaming syntax
// console.log(`${name} is ${age} years old and super fly`);
// console.log(`oh and uh.. its ${temperature} degrees in ${city} yo`);

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self published' } = book.publisher;
// console.log(publisherName);

//// objects up top arrays down below my guy

const address = ['2023 Shaughnessy Pl', 'Coquitlam', 'BC', 'V3e2j1'];

const [street, city, province = 'Alberta', zip] = address;

//array destructuring happens by position, leaving them off the end is intuitive, but if you just want city and province it would look like:

// const [, city, province = 'Alberta'];

console.log(`you are in ${city}, ${province}`);

const item = ['Coffee', '2.00', '2.50', '2.75'];

const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);
