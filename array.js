/************************
  1. Create Array
************************/
let arr1 = [1, 2, 3, 4];
let arr2 = new Array(5, 6, 7);
let arr3 = ["HTML", "CSS", "JS"];

/************************
  2. Array Length
************************/
console.log(arr1.length); // 4

/************************
  3. Access & Update
************************/
console.log(arr1[0]); // 1
arr1[1] = 20;

/************************
  4. Add / Remove (END)
************************/
arr1.push(5);    // add at end
arr1.pop();      // remove from end

/************************
  5. Add / Remove (START)
************************/
arr1.unshift(0); // add at start
arr1.shift();    // remove from start

/************************
  6. Merge & Join
************************/
let newArr = arr1.concat(arr2);
console.log(arr3.join("-")); // HTML-CSS-JS

/************************
  7. Slice & Splice
************************/
console.log(arr1.slice(1, 3)); // copy part

arr1.splice(1, 1, 99); // remove & insert
// index, deleteCount, newValue

/************************
  8. Search
************************/
console.log(arr3.includes("JS")); // true
console.log(arr3.indexOf("CSS")); // 1
console.log(arr3.lastIndexOf("JS"));

/************************
  9. Looping
************************/
arr3.forEach(item => console.log(item));

for (let i of arr3) {
  console.log(i);
}

/************************
 10. Transform (IMPORTANT)
************************/
let nums = [1, 2, 3, 4];

let mapArr = nums.map(n => n * 2);
let filterArr = nums.filter(n => n % 2 === 0);
let sum = nums.reduce((a, b) => a + b, 0);

/************************
 11. Check Condition
************************/
console.log(nums.some(n => n > 3)); // true
console.log(nums.every(n => n > 0)); // true

/************************
 12. Sort & Reverse
************************/
let letters = ["b", "a", "c"];
letters.sort();
letters.reverse();

let numbers = [10, 5, 20];
numbers.sort((a, b) => a - b); // ascending

/************************
 13. Convert to String
************************/
console.log(arr3.toString());

/************************
 14. Flat Array
************************/
let flatArr = [1, [2, [3, 4]]];
console.log(flatArr.flat(2));

/************************
 15. Find Methods
************************/
console.log(nums.find(n => n > 2));
console.log(nums.findIndex(n => n > 2));

/************************
 16. Fill & Copy
************************/
let a = [1, 2, 3, 4];
a.fill(0, 1, 3);

let b = [1, 2, 3, 4];
b.copyWithin(2, 0);

/************************
 17. Check Array
************************/
console.log(Array.isArray(arr1));

/************************
 18. Spread Operator
************************/
let copy = [...arr1];
