// spread / rest - syntax - ...

//  spread - unpack
// rest - pack

// spread - ...

//clone / copy

// let myArray = [5, "Dev", true];

// let myNewArray = myArray;

// myArray[0] = "Manny";

// console.log(myArray);
// console.log(myNewArray);

// let myArray = [5, "Dev", true];

// const myNewArray = [...myArray];

// myArray[0] = "Devanshu";

// console.log(myArray);
// console.log(myNewArray);

// merging

// const a = [1, 2, 3];

// const b = [2, 8, 9];

// const c = [...a, ...b];

// console.log(c);

// copy // shalllow copy

// const obj = {
//   userName: "Devanshu",
//   age: 56,
// };

// const newObj = { ...obj };

// obj.userName = "Manny";

// console.log(obj);
// console.log(newObj);

// function add(a, b, c) {
//   const d = a + b + c;
//   return d;
// }

// let num = [1, 2, 3];

// const output = add(...num);

// console.log(output);

// const obj_one = {
//   product_one: "I-Phone",
// };

// const obj_two = {
//   product_two: "Samsung",
// };

// const product = { ...obj_one, ...obj_two };

// console.log(product);

// const str = "Devanshu";

// const myArrAY = [...str];

// console.log(myArrAY);

// rest - pack - ...

// function add(...numbers) {
//   let result = 0;
//   for (let value of numbers) {
//     result += value;
//   }
//   return result;
// }

// console.log(add(2, 3, 4, 5, 6, 7, 9, 7));

const obj = { name: "devanshu", age: 56, city: "jaipur" };

const { name, ...rest } = obj;

console.log(name);
console.log(rest);
