const prompt = require("prompt-sync")();

// conditions - if else - else if - if

// syntax

//true - if{} - run
// false - else{} - run

// if (condition) {
//   // statement true
// } else {
//   // statement false
// }

// third party pacakage install - prompt-sync
// npm init -y  - package.json
// npm i prompt-sync
// require("prompt-sync") - file use

// let age = prompt("Enter A Number :-  ");
// console.log(age + " Type :- " + typeof age);

// if (age >= 18) {
//   console.log("You are Eligible for vote..");
// } else if (age < 18) {
//   console.log("You Are not eligible for vote...");
// } else {
//   console.log("Invalid Input...");
// }

// calculator - using ifelse -
// input = 1 input = 2 input = + ------ output = 1+2 = 3

// let num1 = parseFloat(prompt.hide("Entre First Number :- ")); // "12"
// let num2 = parseFloat(prompt("Enter Second Number :- ")); // "2"
// let operator = prompt("Enter Operator (+,-,/,*) :-  "); // "+"

// let result;

// if (operator == "+") {
//   result = num1 + num2;
// } else if (operator == "-") {
//   result = num1 - num2;
// } else if (operator == "*") {
//   result = num1 * num2;
// } else if (operator == "/") {
//   result = num1 / num2;
// } else {
//   result = "Invalid Input...🙂";
// }

// console.log(num1 + operator + num2 + " = " + result);

// if(){
//     if(){
//         if(){

//         }else if(){

//         }else{

//         }
//     }
// }

// if(){
// false
// }

// if(){
// true
// }

// if(){
// true
// }

// if(){
// true
// }else if(){

// }

// let height = prompt("Enter Height :- (short/tall):- ");

// if (height == "short") {
//   const squaek = prompt("Cannot Squeak / Can Squeak (yes/no):- ");
//   if (squaek == "yes") {
//     console.log("Might Be a Rat..");
//   } else if (squaek == "no") {
//     console.log("Might be a squirrel");
//   } else {
//     console.log("Invalid Input..🤨");
//   }
// } else if (height == "tall") {
//   let neck = prompt("Enter Neck (short/long):- ");
//   if (neck == "short") {
//     let nose = prompt("Enter Nose (short/long):- ");
//     if (nose == "short") {
//       let stay = prompt("Onland / InWater (land/water):-  ");
//       if (stay == "land") {
//         console.log("Might be a rhiocerose..");
//       } else if (stay == "water") {
//         console.log("Might be a hippo...");
//       } else {
//         console.log("Invalid Input..🤨");
//       }
//     } else if (nose == "long") {
//       console.log("Might be a elephant");
//     } else {
//       console.log("Invalid Input..🤨");
//     }
//   } else if (neck == "long") {
//     console.log("Might be a giraffe");
//   } else {
//     console.log("Invalid Input..🤨");
//   }
// } else {
//   console.log("Invalid Input..🤨");
// }

//ternary Operator

// let age = prompt("Enter your age :- ");

// age >= 18
//   ? console.log("You are eligible for vote") // if
//   : age < 18
//   ? console.log("You are note eligible for vote") // else if
//   : console.log("Invalid Input ...🤨"); // else

// switch statements

// syntax - switch(statement){case1 case2 case3}

// let job_role = prompt("Enter your jobrole:- ");

// switch (job_role) {
//   case "teacher":
//     console.log("hello you are a good teacher..👍");
//     break;

//   case "doctor":
//     console.log("hello you are a good doctor..👍");
//     break;

//   case "driver":
//     console.log("hello you are a good driver..✅");
//     break;

//   default:
//     console.log("Invalid Input..🤨");
//     break;
// }

let player_one = prompt.hide("Guess Number:- ");
let player_two = prompt("Guess player_one Number :- ");

if (player_one == player_two) {
  console.log("Yahoooo...You Won 🥳");
  let chances = 3;
} else {
  console.log("Batter luck next time..🤨");
}
