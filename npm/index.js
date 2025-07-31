// const prompt = require("prompt-sync")();

// const password = require("password");

// prompt("Enter Number :- ");

// console.log(password(2));

import chalk from "chalk";
import figlet from "figlet";
import cowsay from "cowsay";

console.log(chalk.blue("Hello class"));
console.log(chalk.bgBlue.white("Skillwaala"));

figlet("Devanshu", (err, data) => {
  console.log(data);
});

console.log(
  cowsay.say({
    text: "Hello Guys",
  })
);
