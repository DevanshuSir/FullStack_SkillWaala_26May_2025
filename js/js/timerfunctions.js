// setTimeout setInterval

// sync

// let a = 10;
// console.log("Hello");
// console.log(a);
// console.log(b);
// console.log("Hello class");

// console.log("Start");
// setTimeout(() => {
//   console.log("Hello devanshu sir...");
// }, 2000);
// console.log("End");

// setInterval(() => {
//   console.log("Devanshu Sir 😍");
// }, 2000);

let count = 0;

let id = setInterval(() => {
  console.log("Running...");
  count++;
  if (count === 5) {
    clearInterval(id);
  }
}, 1000);
