// ES5
// function sum(a,b,c,d,e){
//     console.log(a+b+c+d+e);
// }
// sum(1,2,3,4,5);

// function sum(...inputs){
//     // console.log(inputs);//array format
//     //  console.log(...inputs); //simple 
//     let total=0;
//     for(let i of inputs){
//         total+=i;
//     }
//     console.log(total);
// }

// sum(1,2,3,4,6,7,8,9,5);


function fun(a,b,...c){
    console.log(`${a} ${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf("Edan"));
}

fun("Ronaldo","Neymar","pele","Messi","Edan");