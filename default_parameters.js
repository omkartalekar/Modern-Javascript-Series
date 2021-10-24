// multiply 2 numbers

// ES5
// function mult(a,b){
//     console.log(a*b);
// }
// mult(3); //not a number NaN

// ES5
// function mult(a,b){
//     b=(typeof b !=="undefined")? b : 2 ;
//     console.log(a*b);
// }
// mult(3);

// ES6
// function mult(a,b=2){
//     console.log(a*b);
// }
// mult(4);

const mult=(a,b=4,c=5)=>{
    console.log(`${a*b*c}`);
}
mult(4);