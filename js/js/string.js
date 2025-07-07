// string datatype - "" '' ``

// let text = "   kal Ho Na Ho...    ";

// console.log(text + " Type :- " + typeof text);

// string methods

// length

// console.log(text.length);

// trim

// let text = "   kal Ho Na Ho...    ";

// let textTrim = text.trim();

// console.log(text + " Length:- " + text.length);
// console.log(textTrim + " Length :- " + textTrim.length);

// console.log(text.length);
// let trimStartText = text.trimStart();
// console.log(trimStartText + " Length:- " + trimStartText.length);
// let trimLastText = text.trimEnd();
// console.log(trimLastText + " Length :- " + trimLastText.length);

// let text = "   Kal Ho Na Ho...    ";

// uppercase lowercase

// console.log(text.toUpperCase());
// console.log(text.toLowerCase());

// let text = "Kal Ho Na Ho";
// //index -   01234567891011

// // console.log(text.length);
// let cutText = text.slice(4, 9);
// console.log(cutText);
// let text = "Kal Ho Na Ho Ho Ho ";

// // replace

// let replaceValue = text.replace("Ho", "Phir");
// let replaceAllValue = text.replaceAll("Ho", "Phir");

// console.log(replaceValue);
// console.log(replaceAllValue);

// let text = "Kal Ho Na Ho Ho Ho ";

// let textaccess = text.charAt(7);

// console.log(textaccess);

// let firstName = "Devanshu ";
// let lastName = "Kumawat";

// let fulllName = firstName.concat(lastName);

// console.log(fulllName);

let text = "Kal Ho Na Ho Ho Ho ";

let upperValue = text.toLowerCase();

let hasValue = upperValue.includes("kal");

console.log(hasValue);
