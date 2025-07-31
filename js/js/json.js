// json - javascript object notation

// js obj

const { add } = require("../js/module/one.js");

const product = {
  productName: "Samsung",
  productPrice: "$57",
  address: {
    city: "Jaipur",
    pincode: 567,
  },
};

add(6, 8);

const data = JSON.parse(JSON.stringify(product));
console.log(data);
