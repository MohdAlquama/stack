let arr = [1, 2, 3, 4, 5];
let filteredAndMapped = arr
  .filter(num => num % 2 === 0)

console.log(filteredAndMapped);

let mapout = arr.map(num => num % 2 === 0 ? 1 : 0);

console.log(mapout);