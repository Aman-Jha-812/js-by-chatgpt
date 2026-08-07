const arr1 = [10,20,30];
const arr2 = [...arr1];
arr2.push(40);
console.log(arr1);
console.log(arr2);


const frontend= ["HTML","CSS"];
const backend = ["Node","MongoDb"];
const skills = [...frontend,...backend];
console.log(skills);

const student = {
    name: "Aman",
    age:22
}

const student2 = {
    ...student,
    city:"Patna"
}
console.log(student2);

const student3={
    ...student,
    age:25
}
console.log(student3.age);

const student4 ={
    age:25,
    ...student
}

console.log(student4.age);

