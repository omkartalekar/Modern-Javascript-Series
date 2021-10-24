const biodata={
    name:"vinod",
    age:26,
    deg:{
        first:"BCS",
        second:"MCS"
    }
}

// let name,age,deg;
// let {name,age,deg}=biodata;

// for changing name u can write it as
let {name:names,age:ages,deg:degree}=biodata;

console.log(`my name is ${names} ${ages} ${degree.first} ${degree.second}`);
