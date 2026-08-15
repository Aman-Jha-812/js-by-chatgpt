const arr = [10,20,30,40];

const newarr = arr.map((num)=>{
    return num+5;
})
//console.log(newarr);
/*
const students = [
    {name:"Aman", age:22},
    {name:"Rahul", age:21},
    {name:"Priya", age:20}
];

// const studentsname = students.map((num)=>{
//     return num.name;
// });
// console.log(studentsname);

const studentsname = students.map((num)=>{
    return (num.age+5);
});
console.log(studentsname);
*/
//<---Map +index--->
/*
const students = ["Aman", "Rahul", "Priya"];
const result = students.map((student,index)=>{
return index + " - "+student;
})
console.log(result);

const numbers = [10, 20, 30];
const results = numbers.map((num,index)=>{
    return num+index;
})
console.log(results);*/

const number = [10,15,20,25,30];
/*
const result = number.map((num)=>{
    num*2;
})
console.log(result);*/
/*
const result = number.map((num)=>{
    if(num>20){
        return "Big";
    }
    else return "smaill";
})

console.log(result);
*/

const students = [
    {name: "Aman", age: 22},
    {name: "Rahul", age: 17},
    {name: "Priya", age: 20}
];

const result = students.map((obj)=>{
    if(obj.age>=18){
        return {
            name:obj.name,
            status:"Adult"
            
        }
    }
    else return {
        name:obj.name,
        status:"Minor"
    }
}) 

console.log(result);