const sayHello = ()=>{
    console.log("Hello World");
}
sayHello();

const add = (a,b)=>{
    return (a+b);
}
const x = add(3,7);
console.log(x);

const chek = (num) => {
    if(num%2===0){
        return "even";
    }
    else return "odd";
}
const y = chek(7);
console.log(y);


const greet = (name)=>{
    return "Welcome "+name;
}
const z = greet("Aman");
console.log(z);


const multiply = (a,b)=>a*b;

const u= multiply(5,4);

console.log(u);


const test = ()=> "Hello";

console.log(test());