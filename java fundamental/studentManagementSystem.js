const students = [
    {name:"Aman",age:22,course:"cse"},
    {name:"Gautam",age:23,course:"ECE"},
    {name:"Varsha",age:20,couse:"LLB"}
];
students.push({name:"Priya",age:19,couse:"home science"});
//console.log(students);

for(let i =0;i<students.length;i++){
    if(students[i].name==="Aman"){
        students[i].age=25;
    // console.log(i);
    //students.splice(i,1)
}
}

console.log(students.length);


// students.splice(2,1);
//console.log(students);


