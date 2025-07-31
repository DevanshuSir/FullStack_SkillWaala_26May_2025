// forEach , map , filter , reduce

// forEach

// const myArray = ["Devanshu", "Manny", 45, true, { name: "Kizie", age: 45 }];

// myArray.forEach((value, index) => {
//   console.log(value);
// });

// function test(value, index) {
//   console.log(value);
// }

// myArray.forEach(test);

// map

// const myArray = ["Devanshu", "Manny", 45, true, { name: "Kizie", age: 45 }];

// myArray.map((value, index) => {
//   console.log(value);
// });

// forEach and Map

// const myArray = ["Devanshu", "Manny", 45, true, { name: "Kizie", age: 45 }];

// const returendValue = myArray.forEach((value, index) => {
//   return value;
// });

// console.log(returendValue); // undefiend

// let testnew;
// console.log(testnew);

// const myArray = ["Devanshu", "Manny", 45, true, { name: "Kizie", age: 45 }];

// const returendValue = myArray.map((value, index) => {
//   return value;
// });

// console.log(returendValue); // new array

// filter

// const myArray = [12, 34, 2, 1, 33, 44, 5, 56, 7, 43, 34, 31];

// // condition - 30>numbers - [30>]

// const returendFilterValue = myArray.filter((value, index) => {
//   return value > 40;
// });

// console.log(returendFilterValue);

// reduce

// const myArray = [1, 2, 3, 4, 5, 6];

// const returendSumValue = myArray.reduce((acc, value, index) => {
//   return acc + value;
// });

// console.log(returendSumValue); // 21

//acc = 1 value = 2  - acc+value = 3
//acc = 3 value = 3 - 6
//acc = 6 value = 4 - 10
//acc = 10 value = 5 - 15
//acc = 15 value = 6 - 21
//acc = 21 value = ? break - final result - 21

// const myArray = [1, 2, 3, 4, 5, 6];

// const returendSumValue = myArray.reduce((acc, value, index) => {
//   return acc + value;
// }, 5);

// console.log(returendSumValue); // 21

// acc = 5 value = 1 = 6
//acc = 6 value = 2 = 8
//acc = 8 value = 3 = 11
//acc = 11 value = 4 = 15
//acc = 15 value = 5 = 20
//acc = 20 value = 6 = 26
//acc = 26 value = ? final result = 26

const user = [
  { name: "Dev", id: 1 },
  { name: "Aman", id: 2 },
];

const userObj = user.reduce((acc, value, index) => {
  acc[value.id] = value.name;
  return acc;
}, {});

console.log(userObj);

// acc = {} value -  { name: "Dev", id: 1 },
// task - {1:Dev}
// acc = {1:Dev} -  { name: "Aman", id: 2 },
// task - {1:Dev,2:aman}

// return - {1:Dev,2:aman}

// const obj = {};

// obj["name"] = "devanshu";
// obj["age"] = 45;

// console.log(obj);
