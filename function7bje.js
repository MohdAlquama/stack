/************************************
 * 1. Function Declaration (Named)
 ************************************/
function sayHello() {
  console.log("Hello from function declaration");
}
sayHello();


/************************************
 * 2. Anonymous Function
 ************************************/
const greet = function () {
  console.log("Hello from anonymous function");
};
greet();


/************************************
 * 3. Named Function Expression
 ************************************/
const welcome = function sayWelcome() {
  console.log("Hello from named function expression");
};
welcome();


/************************************
 * 4. Arrow Function (Basic)
 ************************************/
const arrowGreet = () => {
  console.log("Hello from arrow function");
};
arrowGreet();


/************************************
 * 5. Arrow Function (Single Line)
 ************************************/
const add = (a, b) => a + b;
console.log("Add:", add(5, 3));


/************************************
 * 6. Arrow Function (One Parameter)
 ************************************/
const square = x => x * x;
console.log("Square:", square(4));


/************************************
 * 7. Arrow Function (No Parameters)
 ************************************/
const sayHi = () => console.log("Hi from arrow");
sayHi();


/************************************
 * 8. Immediately Invoked Function (IIFE)
 ************************************/
(function () {
  console.log("IIFE normal function");
})();


/************************************
 * 9. Arrow Function IIFE
 ************************************/
(() => {
  console.log("IIFE arrow function");
})();


/************************************
 * 10. Anonymous Function in setTimeout
 ************************************/
setTimeout(function () {
  console.log("Anonymous function inside setTimeout");
}, 1000);


/************************************
 * 11. Arrow Function in setTimeout
 ************************************/
setTimeout(() => {
  console.log("Arrow function inside setTimeout");
}, 1500);


/************************************
 * 12. Anonymous Function in Event (Example)
 ************************************/
// document.addEventListener("click", function () {
//   console.log("Clicked using anonymous function");
// });


/************************************
 * 13. Arrow Function in Event (Example)
 ************************************/
// document.addEventListener("click", () => {
//   console.log("Clicked using arrow function");
// });


/************************************
 * 14. Arrow Function with Array Methods
 ************************************/
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

const even = numbers.filter(n => n % 2 === 0);
console.log("Even:", even);


/************************************
 * 15. Difference Example (this keyword)
 ************************************/
const obj = {
  name: "JavaScript",

  normalFunc: function () {
    console.log("Normal this:", this.name);
  },

  arrowFunc: () => {
    console.log("Arrow this:", this.name); // undefined
  }
};

obj.normalFunc();
obj.arrowFunc();


/************************************
 * END OF FILE
 ************************************/
