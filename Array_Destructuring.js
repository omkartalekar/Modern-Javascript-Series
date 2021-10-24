const myproglang=["js","java","php","ruby","c++"];
// es5
// var top1=myproglang[0];
// var top2=myproglang[1];
// var top3=myproglang[2];
// console.log("my fav programming language is "+top1);

// let [top1,top2,top3,top4,top5]=myproglang;
// console.log("my fav programming language is "+top1);


console.log(myproglang.length);
let [top1,,,,toplast]=myproglang;
console.log(`my fav language is ${top1} and my 2nd fav is ${toplast}`);

