const propmt = require("prompt-sync")();

// functions - block of code

// {
//   code;
// }

// js function types - declartion , Expresssion , Arrow Function(ES6)

//declartion Function

// function add() {
//   //block of code
//   console.log("Hello Class Skillwaala 😍");
// }

// //invoke/call

// add();
// add();
// add();

//Expresssion function

// const text = function () {
//   console.log("Kal ho na hho.....");
// };

// text();

// Arrow Function

// const text = () => {
//   console.log("Hello class Good Evening 😍");
// };

// text();

// Parameters , Arguments

// name = "Devanshu"

// function add(a, b) {
//   let c = a + b;
//   console.log(c);
// }

// add(6, 9);
// add(8, 10);

// function Guest(guest = "Guest") {
//   console.log("Hello " + guest);
// }

// Guest();

// function add(a = "SomeValue") {
//   console.log(a);
// }

// add(45678);

// function test(value) {
//   console.log("Hello " + value);
// }

// test(propmt("Hello Enter Your Name :- "));

// return

function test() {
  let a = "Devanshu";
  return a;
}

const returendValue = test();
console.log(returendValue);
