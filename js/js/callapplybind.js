// const product_one = {
//   product: "Samsung",
//   price: "$56",
//   address: {
//     city: "Jaipur",
//     pincode: 4567,
//   },
//   alldetails: function () {
//     console.log(`productname:- ${this.product} price:- ${this.price}`);
//   },
// };

// // product_one.alldetails();

// const product_two = {
//   product: "i-Phone",
//   price: "$56",
//   address: {
//     city: "Ajmer",
//     pincode: 412567,
//   },
// };

// const product_three = {
//   product: "Tomato",
//   price: "$2",
//   address: {
//     city: "Ajmer",
//     pincode: 414567,
//   },
// };

// product_one.alldetails();
// product_one.alldetails.call(product_two);
// product_one.alldetails.call(product_three);

const allDetails = function (user, pass) {
  console.log(
    `ProductName :- ${this.product}  ProductPrice :- ${this.price} User:- ${user}  Pass :- ${pass}`
  );
};

const product_one = {
  product: "Samsung",
  price: "$56",
  address: {
    city: "Jaipur",
    pincode: 4567,
  },
};

const product_two = {
  product: "i-Phone",
  price: "$56",
  address: {
    city: "Ajmer",
    pincode: 412567,
  },
};

const product_three = {
  product: "Tomato",
  price: "$2",
  address: {
    city: "Ajmer",
    pincode: 414567,
  },
};

// allDetails.call(product_one, "devanshu", "dev@1234");

// allDetails.apply(product_two, ["Manny", "manny@123"]);

// bind

const newFun = allDetails.bind(product_two, "Kizie", "kizie@1234");

newFun();
