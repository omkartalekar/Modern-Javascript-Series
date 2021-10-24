
// function sum(a,b,c){
//     console.log(a+b+c);
// }

// var arrVal=[5,2,3];
// console.log(...arrVal);
// sum(...arrVal);


// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr3=[7,8,9];
// arr1=arr1.concat(arr2);

// arr1=[...arr1,...arr2,...arr3];
// console.log(arr1);

// replace copy
// let arrc1=[1,2,3];
// let arrc2=arrc1;
// console.log(arrc2);

// arrc2.push(4,5);
// console.log(arrc2);
// console.log(arrc1);

// real use here of spread operator
let arrc1=[1,2,3];
let arrc3=[6,7,8];

let arrc2=[...arrc1,4,5,...arrc3,9];
console.log(arrc2);
console.log(arrc1);