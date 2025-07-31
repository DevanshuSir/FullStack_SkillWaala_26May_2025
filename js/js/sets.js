// sets - unique value

// const mySet = new Set(["dev", "a", "b", "dev"]);

// // add
// mySet.add("Devanshu");
// mySet.add("b");

// // delete
// mySet.delete("dev");

// // has
// const hasValue = mySet.has("ab");

// // mySet.clear();

// const sizeOfSet = mySet.size;

// console.log(sizeOfSet);

// console.log(hasValue);

// console.log(mySet);

const myArray = [1, 2, 3, 4, 4, 3, 2, 1, 8, 8, 8];

const uniqueArray = [...new Set(myArray)];
console.log(uniqueArray);

// const myNweArray = [...uniqueArray];

// console.log(myNweArray);
