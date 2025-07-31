// lexical scop

// global local block

// function outer() {
//   let text = "Kal ho na ho ";

//   function inner() {
//     console.log(text);
//   }

//   inner();
// }

// outer();

// function outer() {
//   let text = "helllo Devanshu Sir 😉";

//   function inner() {
//     console.log(text);
//   }
//   return inner;
// }

// const myValue = outer();
// myValue();

// counter

// function counter() {
//   let count = 0;

//   function countsValue() {
//     count++;
//     console.log(count);
//   }
//   return countsValue;
// }

// const increment = counter();

// increment(); // 1
// increment(); // 2
// increment(); // 3
// increment(); // 4

// loop

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
} // 4 4 4

for (var i = 1; i <= 3; i++) {
  (function (x) {
    setTimeout(() => {
      console.log(x);
    }, 1000);
  })(i);
}
