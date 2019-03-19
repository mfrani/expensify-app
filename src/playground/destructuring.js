//OBJECT DESTRUCTURING
// const person = {
//   name: "Matthew",
//   age: 26,
//   location: {
//     city: "Philly",
//     temp: 92
//   }
// };
// const { name: firstName = "Anonymous", age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName); //Penguin

//ARRAY DESTRUCTURING

const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pennsylvania",
  "19149"
];

const [, city, state = "New York"] = address;

// console.log(`You are in ${address[1]} ${address[2]}`);
console.log(`You are in ${state}`);

const item = ["Iced Coffee", "$2.00", "$4.50", "$2.75"];

const [itemName, , mediumPrice] = item;
//grab first and third items using array destructuring
console.log("A medium coffee (hot) costs $2.50");

console.log(`A medium ${itemName} costs ${mediumPrice}`);
