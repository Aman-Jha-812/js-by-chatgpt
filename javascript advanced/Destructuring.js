const car = {
    brand:"BMW",
    model:"x5",
    year:2025
};
const {brand,model,year}=car;
console.log(brand);
console.log(model);
console.log(year);


const employee = {
    id: 101,
    name:"Rahul",
    salary:50000
};
const {id,name,salary}=employee;
console.log(name);
console.log(salary);

const user = {
    username:"Aman"
}
const {age}=user;
console.log(age);



const fruits = ["Apple", "Banana", "Mango"];

// const [first, second, third] = fruits;
// console.log(first);
// console.log(second);
// console.log(third);

const [, , third] = fruits;
console.log(third);