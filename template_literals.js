 // es5
// console.log("my name is omkar"+" and surname is talekar")

 // es6
// console.log(`my name is omkar and surname is talekar`);

let firstname="vinod";
let lastname="thapa";

// // console.log(`my name is ${firstname} and lastname is ${lastname}`);

// let a=20;
// let b=30;
// console.log(`fifty is ${a+b} and not ${2*a+b}`);


// template strings methods
console.log(`${firstname}`.startsWith("v")); //true
console.log(`${firstname}`.endsWith("d"));  //true
console.log(`${firstname}`.includes("f"));   //false


console.log(`${firstname} ${lastname} `.repeat(4));