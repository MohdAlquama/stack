/***********************
  1. Create String
***********************/
let str1 = "Hello";
let str2 = 'JavaScript';
let str3 = `Welcome JS`; // Template string

/***********************
  2. String Length
***********************/
console.log(str1.length); // 5

/***********************
  3. Access Characters
***********************/
console.log(str1[0]);        // H
console.log(str1.charAt(1)); // e

/***********************
  4. Change Case
***********************/
console.log(str2.toUpperCase()); // JAVASCRIPT
console.log(str2.toLowerCase()); // javascript

/***********************
  5. Concatenation
***********************/
console.log(str1 + " " + str2);
console.log(`${str1} ${str2}`);

/***********************
  6. Search / Find
***********************/
let text = "I love JavaScript";

console.log(text.includes("love")); // true
console.log(text.indexOf("Java"));  // 7
console.log(text.lastIndexOf("a")); // last position
console.log(text.startsWith("I"));  // true
console.log(text.endsWith("Script")); // true

/***********************
  7. Slice / Substring
***********************/
console.log(text.slice(2, 6));        // love
console.log(text.substring(7, 17));  // JavaScript

/***********************
  8. Replace
***********************/
console.log(text.replace("love", "like"));
console.log(text.replaceAll("a", "@"));

/***********************
  9. Trim Spaces
***********************/
let space = "   Hello JS   ";
console.log(space.trim());
console.log(space.trimStart());
console.log(space.trimEnd());

/***********************
 10. Split String
***********************/
let langs = "HTML,CSS,JS";
console.log(langs.split(",")); // ["HTML","CSS","JS"]

/***********************
 11. Convert String
***********************/
let num = "123";
console.log(Number(num)); // 123

let n = 100;
console.log(String(n)); // "100"

/***********************
 12. Repeat String
***********************/
console.log("JS ".repeat(3)); // JS JS JS 

/***********************
 13. Compare Strings
***********************/
console.log("a" === "a"); // true
console.log("a" > "b");   // false

/***********************
 14. Escape Characters
***********************/
let quote = "He said \"Hello\"";
console.log(quote);

/***********************
 15. Template String (Best)
***********************/
let name = "Alquama";
let age = 22;
console.log(`My name is ${name} and I am ${age} years old`);
