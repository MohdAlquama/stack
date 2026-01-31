// function looping(start=1, end=100) {
//   for (let i = start; i <= end; i++) {
//     console.log(i);
//   }
// }

// looping();

 const maskNumber = (num) => {
  let result = "";

  for (let i = 0; i < num.length; i++) {
    if (i < num.length - 2) {
      result = result + "x";
    } else {
      result = result + num[i];
    }
  }

  return result;
};

// use
console.log(maskNumber("9026226199"));
