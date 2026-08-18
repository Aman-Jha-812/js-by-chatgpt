function student(name,age,course){
    this.name=name;
    this.age= age;
    this.course=course;
    this.introduce= ()=>{
        console.log(`My nameis ${this.name}`);
    }
    
}

const student1 = new student("Aman",22,"cse")
const student2= new student("Rahul",23,"ece")

console.log(student1.name)
console.log(student2.name)

student1.introduce();