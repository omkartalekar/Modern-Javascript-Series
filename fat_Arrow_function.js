// ES5 old method
// var sum=function(){
//     var a=5;
//     var b=10;
//     return a+b;
// }
// console.log(sum());

// const sum = () => {
//     let a=5;
//     let b=10;
//     return a+b;
// }
// console.log(sum());


let a=20;
let b=10;
// below both are correct ways
// const sum=()=>{ return a+b};
const sum=()=> a+b ;
console.log(sum());