# JavaScript — Arrays & Objects Complete Notes

// ==================================================
// PART 1 — ARRAYS
// ==================================================

// ==================================================
// 1. ARRAY KYA HOTA HAI?
// ==================================================

// Array ek collection hai jisme multiple values
// ko ek single variable me store kar sakte hain.
//
// Array me values kisi bhi data type ki ho sakti hain.

const fruits = ["Apple", "Banana", "Mango"];

// ==================================================
// 2. ARRAY INDEX
// ==================================================

// Array ka index 0 se start hota hai.
//
//         0        1         2
//      Apple    Banana     Mango

console.log(fruits[0]);
// Apple

console.log(fruits[1]);
// Banana

console.log(fruits[2]);
// Mango

// ==================================================
// 3. ARRAY LENGTH
// ==================================================

console.log(fruits.length);
// 3

// length → array me total elements ki quantity

// Last element:

console.log(fruits[fruits.length - 1]);
// Mango

// Kyunki:
// length = 3
// last index = 3 - 1 = 2

// ==================================================
// 4. ARRAY ME DIFFERENT DATA TYPES
// ==================================================

const data = [
"Aman",
22,
true,
["HTML", "CSS"],
{ city: "Patna" }
];

// Array ke andar:
// string
// number
// boolean
// array
// object
// sab store kar sakte hain.

// ==================================================
// 5. push()
// ==================================================

// push() → array ke END me element add karta hai.

const numbers = [10, 20, 30];

numbers.push(40);

console.log(numbers);
// [10, 20, 30, 40]

// ==================================================
// 6. pop()
// ==================================================

// pop() → array ke END se last element remove karta hai.

numbers.pop();

console.log(numbers);
// [10, 20, 30]

// ==================================================
// 7. unshift()
// ==================================================

// unshift() → array ke START me element add karta hai.

numbers.unshift(5);

console.log(numbers);
// [5, 10, 20, 30]

// ==================================================
// 8. shift()
// ==================================================

// shift() → array ke START se first element remove karta hai.

numbers.shift();

console.log(numbers);
// [10, 20, 30]

// ==================================================
// 9. QUICK MEMORY TRICK
// ==================================================

// push()    → END me ADD
// pop()     → END se REMOVE
// unshift() → START me ADD
// shift()   → START se REMOVE

// ==================================================
// 10. slice()
// ==================================================

// slice() array ka ek portion COPY karta hai.
// Original array ko CHANGE nahi karta.
//
// Syntax:
// array.slice(start, end)
//
// start → included
// end   → NOT included

const arr = [10, 20, 30, 40, 50];

const result = arr.slice(1, 4);

console.log(result);
// [20, 30, 40]

console.log(arr);
// [10, 20, 30, 40, 50]

// Original array unchanged.

// ==================================================
// 11. splice()
// ==================================================

// splice() original array ko CHANGE karta hai.
//
// Syntax:
// array.splice(start, deleteCount, newItems...)

const values = [10, 20, 30, 40, 50];

const removed = values.splice(1, 2);

console.log(removed);
// [20, 30]

console.log(values);
// [10, 40, 50]

// 1 → starting index
// 2 → kitne elements delete karne hain

// ==================================================
// 12. splice() — REPLACE
// ==================================================

const colors = ["Red", "Blue", "Green"];

colors.splice(1, 1, "Yellow");

// index 1 → Blue
// 1 → ek element delete
// "Yellow" → uski jagah add

console.log(colors);
// ["Red", "Yellow", "Green"]

// ==================================================
// 13. ARRAY DESTRUCTURING
// ==================================================

// Array destructuring me [] use hota hai.
// Values POSITION / INDEX ke according milti hain.

const students = ["Aman", "Rahul", "Rohit"];

const [student1, student2, student3] = students;

console.log(student1);
// Aman

console.log(student2);
// Rahul

// ==================================================
// 14. SKIP VALUE IN DESTRUCTURING
// ==================================================

const nums = [10, 20, 30];

const [a, , c] = nums;

// a → 10
// second value skip
// c → 30

console.log(a);
console.log(c);

// ==================================================
// 15. DEFAULT VALUE
// ==================================================

const marks = [80, 90];

const [math, english, science = 70] = marks;

// math → 80
// english → 90
// science → 70 because value missing

console.log(science);

// ==================================================
// 16. REST IN ARRAY DESTRUCTURING
// ==================================================

const skills = ["Java", "React", "Node", "AWS"];

const [first, ...remaining] = skills;

// first → "Java"
// remaining → ["React", "Node", "AWS"]

console.log(first);
console.log(remaining);

// remaining koi special keyword nahi hai.
// Variable ka naam kuch bhi ho sakta hai:
// ...rest
// ...others
// ...remaining

// ==================================================
// 17. ARRAY SPREAD
// ==================================================

const arr1 = [10, 20, 30];

const arr2 = [...arr1];

// ...arr1 → elements ko spread karta hai
// arr2 → new array

arr2.push(40);

console.log(arr1);
// [10, 20, 30]

console.log(arr2);
// [10, 20, 30, 40]

// ==================================================
// 18. ARRAY MERGE USING SPREAD
// ==================================================

const frontend = ["HTML", "CSS"];
const backend = ["Node", "MongoDB"];

const allSkills = [...frontend, ...backend];

console.log(allSkills);
// ["HTML", "CSS", "Node", "MongoDB"]

// ==================================================
// PART 2 — OBJECTS
// ==================================================

// ==================================================
// 19. OBJECT KYA HOTA HAI?
// ==================================================

// Object data ko KEY-VALUE pair me store karta hai.
//
// key   → property ka naam
// value → property ki actual value

const student = {
name: "Aman",
age: 22,
college: "CUTM"
};

// name  → key
// Aman  → value
// age   → key
// 22    → value

// ==================================================
// 20. OBJECT PROPERTY ACCESS
// ==================================================

// DOT NOTATION

console.log(student.name);
// Aman

console.log(student.age);
// 22

// ==================================================
// 21. BRACKET NOTATION
// ==================================================

console.log(student["name"]);
// Aman

console.log(student["age"]);
// 22

// Dot notation:
// student.name

// Bracket notation:
// student["name"]

// ==================================================
// 22. OBJECT ME PROPERTY CHANGE
// ==================================================

student.age = 25;

console.log(student.age);
// 25

// ==================================================
// 23. OBJECT ME NEW PROPERTY ADD
// ==================================================

student.city = "Patna";

console.log(student);

// {
//     name: "Aman",
//     age: 25,
//     college: "CUTM",
//     city: "Patna"
// }

// ==================================================
// 24. OBJECT PROPERTY DELETE
// ==================================================

delete student.college;

console.log(student);

// college property remove ho gayi.

// ==================================================
// 25. NESTED OBJECT
// ==================================================

// Ek object ke andar doosra object ho sakta hai.

const company = {
name: "OpenAI",

```
employees: {
    developer: {
        frontend: "Aman",
        backend: "Rahul"
    }
}
```

};

// company → outer object
// employees → nested object
// developer → nested object
// frontend → key
// Aman → value

console.log(company.employees.developer.frontend);
// Aman

// Access ka flow:
//
// company
//   ↓
// employees
//   ↓
// developer
//   ↓
// frontend
//   ↓
// "Aman"

// ==================================================
// 26. OBJECT DESTRUCTURING
// ==================================================

const car = {
brand: "BMW",
model: "X5",
year: 2025
};

const { brand, model, year } = car;

console.log(brand);
// BMW

console.log(model);
// X5

console.log(year);
// 2025

// Object destructuring me:
// {} use hota hai
// property/key ke naam ke basis par value milti hai.

// ==================================================
// 27. OBJECT DESTRUCTURING WITH DIFFERENT VARIABLE NAME
// ==================================================

const employee = {
name: "Rahul",
salary: 50000
};

const { name: employeeName, salary: employeeSalary } = employee;

console.log(employeeName);
// Rahul

console.log(employeeSalary);
// 50000

// name → original property
// employeeName → new variable name

// ==================================================
// 28. OBJECT DESTRUCTURING DEFAULT VALUE
// ==================================================

const user = {
name: "Aman"
};

const { name, age = 22 } = user;

console.log(name);
// Aman

console.log(age);
// 22

// age property nahi thi,
// isliye default value 22 use hui.

// ==================================================
// 29. OBJECT SPREAD
// ==================================================

const user1 = {
name: "Aman",
age: 22
};

const user2 = {
...user1
};

// New object create hua.

console.log(user2);
// { name: "Aman", age: 22 }

// ==================================================
// 30. OBJECT SPREAD + NEW PROPERTY
// ==================================================

const user3 = {
...user1,
city: "Patna"
};

console.log(user3);

// {
//     name: "Aman",
//     age: 22,
//     city: "Patna"
// }

// ==================================================
// 31. OBJECT SPREAD + PROPERTY UPDATE
// ==================================================

const user4 = {
...user1,
age: 25
};

// Same key dobara aayi.
// Last value wins.

console.log(user4.age);
// 25

// ==================================================
// 32. OBJECT KEY ORDER — IMPORTANT
// ==================================================

const user5 = {
age: 25,
...user1
};

// ...user1 ke andar age: 22 hai.
// Ye baad me aaya.
// Isliye 22 final value hai.

console.log(user5.age);
// 22

// ==================================================
// 33. SHALLOW COPY
// ==================================================

const person1 = {
name: "Aman",
address: {
city: "Patna"
}
};

const person2 = { ...person1 };

// Outer object → NEW
// address → SAME nested reference

person2.address.city = "Delhi";

console.log(person1.address.city);
// Delhi

// Nested object same reference hone ki wajah se
// person1 bhi change ho gaya.

// ==================================================
// 34. DEEP COPY
// ==================================================

const person3 = {
name: "Aman",
address: {
city: "Patna"
}
};

const person4 = structuredClone(person3);

// Complete nested structure ki independent copy.

person4.address.city = "Delhi";

console.log(person3.address.city);
// Patna

console.log(person4.address.city);
// Delhi

// ==================================================
// 35. ARRAY vs OBJECT — MAIN DIFFERENCE
// ==================================================

// ARRAY:
//
// const fruits = ["Apple", "Banana", "Mango"];
//
// Data → position/index se access
// fruits[0]

// OBJECT:
//
// const student = {
//     name: "Aman",
//     age: 22
// };
//
// Data → key/property se access
// student.name

// ==================================================
// 36. ARRAY vs OBJECT — QUICK TABLE
// ==================================================

// Array:
// → Ordered collection
// → Index starts from 0
// → []

// Object:
// → Key-value collection
// → Named properties
// → {}

// ==================================================
// 🧠 INTERVIEW DEFINITIONS
// ==================================================

// ARRAY:
// "An array is an ordered collection of values
// stored under a single variable."

// OBJECT:
// "An object is a collection of key-value pairs
// used to represent structured data."

// INDEX:
// "An index is the position of an element in an array,
// starting from 0."

// DESTRUCTURING:
// "Destructuring is a JavaScript syntax used to
// extract values from arrays or properties from objects
// into variables."

// SPREAD:
// "The spread operator (...) expands elements of an
// array or properties of an object."

// SHALLOW COPY:
// "A shallow copy creates a new outer object/array,
// but nested objects may still share references."

// DEEP COPY:
// "A deep copy creates an independent copy including
// nested objects and arrays."

// ==================================================
// 🏆 FINAL MEMORY MAP
// ==================================================

// ARRAY
// → []
// → index/position
// → 0 se start
//
// OBJECT
// → {}
// → key/value
//
// Array Destructuring
// → [a, b, c]
//
// Object Destructuring
// → {name, age}
//
// Rest
// → ...remaining
// → remaining values COLLECT
//
// Spread
// → ...array / ...object
// → values/properties SPREAD
//
// Shallow Copy
// → outer NEW
// → nested SAME REFERENCE
//
// Deep Copy
// → outer NEW
// → nested NEW
