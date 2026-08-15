// const numbers = [5, 10, 15, 20, 25];
// const number1 = numbers.filter((num)=>num >=15);
//console.log(number1);
/*
const students = [
    {name: "Aman", age: 22},
    {name: "Rahul", age: 17},
    {name: "Priya", age: 20},
    {name: "Ravi", age: 16}
];
const student = students.filter((obj)=>{
    
        return obj.age>=18;
    
})


const student1 = students.find((obj) => {
    // condition
    return obj.age>=18;
});
console.log(student1.name);
*/
const students = [
    {name: "Aman", age: 22},
    {name: "Rahul", age: 17},
    {name: "Priya", age: 20}
];

// const result = students.some((student) => {
//     return student.age < 18;
// });

//console.log(result);

const numbers = [5, 10, 15, 20, 25];

const result = numbers.some((num) => {
    return num>15 ;
});

console.log(result);