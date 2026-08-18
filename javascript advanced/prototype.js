function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
}

Student.prototype.introduce = function () {
    console.log(`My name is ${this.name}`);
};

const student1 = new Student("Aman", 22, "CSE");
const student2 = new Student("Rahul", 23, "ECE");

 student1.introduce();
 student2.introduce();

console.log(student1);
console.log(student1.__proto__);
console.log(Student.prototype);

console.log(student1.hasOwnProperty("name"));
console.log(student1.hasOwnProperty("name"));
console.log(student1.hasOwnProperty("introduce"));
console.log(student1.hasOwnProperty("hasOwnProperty"));