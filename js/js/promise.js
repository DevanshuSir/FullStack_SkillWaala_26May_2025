// promise
// pending fullfill reject

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async Task Complete ...🤪");
//     resolve({ userName: "Devanshu" });
//     // reject();
//   }, 2000);
// });

// myPromise.then((res) => {
//   console.log(res);
// });

// myPromise.catch(() => {
//   console.log("Catchblock");
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Order a Pizza..🍕");

//     let deliverd = false;

//     if (deliverd) {
//       resolve("Pizza Delivered ..😍");
//     } else {
//       reject("Order Cancelled..❌");
//     }
//   }, 5000);
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("I am finally block");
//   });

// const data = fetch("https://jsonplaceholder.typicode.com/todoasass")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch("https://dummyjson.com/products")
//   .then((res) => {
//     return res.json();
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function data() {
  try {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

data();
