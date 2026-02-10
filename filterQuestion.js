// let arr=[2,4,4,4,5,6,6,3];
// const uniqueArr = arr.filter((currentValue) => {
//   return arr.indexOf(currentValue) != arr.lastIndexOf(currentValue);


// });
// console.log(uniqueArr);

let str = "hello world";  // h w e r l d
// In JavaScript,
// Set is a built-in object that allows you to store a collection of unique values of any type, whether primitive values
//  or object references

const uniqueChars = new Set(str);
console.log(str);

console.log(uniqueChars); // Set(7) { 'h', 'e', 'l', 'o', ' ', 'w', 'r', 'd' }