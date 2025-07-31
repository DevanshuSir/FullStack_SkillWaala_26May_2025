// callback function

function test(value, callback) {
  console.log(`Helllo Skillwaalo 😍 ${value}`);
  callback();
}

function callBack_one() {
  console.log("Helllo I am a callback fun one");
}

function callBack_two() {
  console.log("Hello I am a callback fun two");
}

test("Devanshu sir", callBack_one);
test("Manny sir", callBack_two);

// function test(value) {
//   console.log(`Helllo Skillwaalo 😍 ${value}`);
//   callBack_two();
// }

// function callBack_one() {
//   console.log("Helllo I am a callback fun one");
// }

// function callBack_two() {
//   console.log("Hello I am a callback fun two");
// }

// test("Devanshu sir");
// test("Manny sir");
