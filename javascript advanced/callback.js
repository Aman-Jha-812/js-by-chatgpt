/*
const sayHelo=() => "Hello Aman"

const executeFunction = (fn) => fn();

console.log (executeFunction(sayHelo));

const greet = (name)=> `Hello ${name}`;

const callbackFunction = (fn, name)=> fn(name);

console.log(callbackFunction(greet, "Rahul"));
console.log(callbackFunction(greet, "Aman"));
*/

/*

function cookFood(callback){
    console.log("Cooking...");
    callback();
}
function eatFood(){
    console.log("Now eating.");
}
cookFood(eatFood);

function calculate(callback){
        
        
        callback(10,5);
}
function add(a,b){
   let result = a+b;

   console.log(result);
}

calculate(add);

*/

function calculate(callback){
 return callback(10,5);

  
}

function multiply(a,b){
    let result=(a*b);
    return result;
}

const result=calculate(multiply);
console.log(result);
