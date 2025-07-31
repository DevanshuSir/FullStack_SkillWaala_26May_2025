// iife - immediatenly invoked function expression

// function add() {
//   let a = 10;

//   console.log(a);
// }

// let b = "fghjk";

// add();

// syntax
(function (name) {
  console.log("Hello class" + " Name " + name);
})("Devanshu");
(() => {
  console.log("Second IIFE...");
})();
