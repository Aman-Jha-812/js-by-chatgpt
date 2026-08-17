//gloabal scope
/*
let lastname = "jha";

const name = ()=>{
     console.log(lastname);
}

name();

// Function scope
function test() {
    let lastname = "jha";
    console.log(lastname);
}

test();

console.log(lastname); 




// block scope   let   → Block Scope
// const → Block Scope
// var   → Function Scope
let name = "Aman";

if (true) {

    let age = 22;

    console.log(name);
    console.log(age);

}

console.log(name);
console.log(age);
*/
// var condition to function scope
function test() {
    var age = 22;
}

test();

console.log(age); // reference error
