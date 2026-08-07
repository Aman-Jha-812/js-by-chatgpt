// JavaScript — Spread Operator, Shallow Copy & Deep Copy

// ==================================================
// 1. SPREAD OPERATOR — ARRAY
// ==================================================

const arr1 = [10, 20, 30];

const arr2 = [...arr1];
// ...arr1 → arr1 ke elements ko spread karta hai
// arr2 ek NEW array hai
// arr1 aur arr2 alag arrays hain

arr2.push(40);

console.log(arr1);
// [10, 20, 30]

console.log(arr2);
// [10, 20, 30, 40]

// ==================================================
// 2. ARRAY MERGE USING SPREAD
// ==================================================

const frontend = ["HTML", "CSS"];
const backend = ["Node", "MongoDB"];

const skills = [...frontend, ...backend];
// frontend ke elements spread hue
// backend ke elements spread hue
// dono arrays ko combine karke new array bana

console.log(skills);
// ["HTML", "CSS", "Node", "MongoDB"]

// ==================================================
// 3. ARRAY ME VALUES ADD KARNA
// ==================================================

const numbers = [10, 20, 30];

const newNumbers = [5, ...numbers, 40];
// 5 → beginning me add
// ...numbers → 10,20,30 spread
// 40 → end me add

console.log(newNumbers);
// [5, 10, 20, 30, 40]

// ==================================================
// 4. SPREAD OPERATOR — OBJECT
// ==================================================

const student = {
name: "Aman",
age: 22
};

const student2 = {
...student
};
// student ki properties spread hui
// student2 ek NEW object hai

console.log(student2);
// { name: "Aman", age: 22 }

// ==================================================
// 5. OBJECT ME NEW PROPERTY ADD KARNA
// ==================================================

const student3 = {
...student,
city: "Patna"
};

// Pehle student ki properties spread hui
// Phir city property add hui

console.log(student3);
// { name: "Aman", age: 22, city: "Patna" }

// ==================================================
// 6. EXISTING PROPERTY KO CHANGE KARNA
// ==================================================

const student4 = {
...student,
age: 25
};

// student se age: 22 spread hua
// uske baad age: 25 likha gaya
// same key dobara aayi
// LAST VALUE WIN karti hai

console.log(student4);
// { name: "Aman", age: 25 }

// ==================================================
// 7. PROPERTY ORDER MATTERS
// ==================================================

const student5 = {
age: 25,
...student
};

// Pehle age: 25
// Baad me ...student se age: 22 aaya
// Last value 22 hai

console.log(student5.age);
// 22

// ==================================================
// GOLDEN RULE
// ==================================================

// Same object key multiple times aaye:
// LAST VALUE WINS.

// ==================================================
// 8. SHALLOW COPY
// ==================================================

const user1 = {
name: "Aman",
age: 22
};

const user2 = { ...user1 };
// Spread ne NEW OUTER OBJECT banaya
// Isliye user1 aur user2 alag objects hain

user2.age = 30;

console.log(user1.age);
// 22

console.log(user2.age);
// 30

// ==================================================
// 9. SHALLOW COPY WITH NESTED OBJECT
// ==================================================

const person1 = {
name: "Aman",
address: {
city: "Patna"
}
};

const person2 = { ...person1 };
// Outer object → NEW object
// Lekin address → nested object ka same reference

person2.address.city = "Delhi";

console.log(person1.address.city);
// "Delhi"

console.log(person2.address.city);
// "Delhi"

// WHY?
// person1.address aur person2.address
// same nested object ko refer kar rahe hain.

// ==================================================
// 10. SHALLOW COPY KO VISUALIZE KARO
// ==================================================

// person1
//
// {
//     name: "Aman",
//     address ──────────┐
//                      ↓
//                 { city: "Patna" }
//                      ↑
//                      │
// person2              │
//                      │
// {
//     name: "Aman",    │
//     address ─────────┘
// }

// Outer object → NEW ✅
// Nested object → SAME REFERENCE ⚠️

// ==================================================
// 11. DEEP COPY
// ==================================================

const user3 = {
name: "Aman",
address: {
city: "Patna"
}
};

const user4 = structuredClone(user3);
// structuredClone() complete nested structure ki
// independent copy banata hai.

user4.address.city = "Delhi";

console.log(user3.address.city);
// "Patna"

console.log(user4.address.city);
// "Delhi"

// Ab dono completely independent hain.

// ==================================================
// 12. SHALLOW vs DEEP COPY
// ==================================================

// SHALLOW COPY
//
// const copy = { ...original };
//
// Outer object → NEW
// Nested object → SAME REFERENCE

// DEEP COPY
//
// const copy = structuredClone(original);
//
// Outer object → NEW
// Nested objects → NEW
// Nested arrays → NEW
// Changes independent

// ==================================================
// 13. SPREAD vs REST
// ==================================================

// REST
//
// const [first, ...rest] = numbers;
//
// ...rest → remaining values ko COLLECT karta hai

// SPREAD
//
// const copy = [...numbers];
//
// ...numbers → values ko SPREAD/EXPAND karta hai

// Same "..." symbol hai,
// lekin context ke according REST ya SPREAD hota hai.

// ==================================================
// INTERVIEW DEFINITIONS
// ==================================================

// SPREAD OPERATOR:
// "The spread operator (...) expands the elements of
// an iterable or the properties of an object."

// SHALLOW COPY:
// "A shallow copy creates a new outer object, but
// nested objects may still share the same reference."

// DEEP COPY:
// "A deep copy creates an independent copy of the
// entire object including nested objects."

// ==================================================
// 🧠 FINAL MEMORY TRICK
// ==================================================

// Spread:
// ... → FAILAO / EXPAND KARO
//
// Shallow Copy:
// Outer NEW → Nested SAME REFERENCE
//
// Deep Copy:
// Outer NEW → Nested NEW
//
// Object duplicate key:
// LAST VALUE WINS
