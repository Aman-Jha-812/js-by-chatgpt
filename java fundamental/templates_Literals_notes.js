// JavaScript — Template Literals Complete Notes

// ==================================================
// 1. TEMPLATE LITERALS KYA HOTE HAIN?
// ==================================================

// Template Literals JavaScript me strings ko
// easily create aur variables/expressions ko
// string ke andar insert karne ke liye use hote hain.
//
// Template Literals ke liye BACKTICKS ` ` use hote hain.
//
// Normal string:
// "Hello Aman"
//
// Template literal:
// `Hello Aman`

// ==================================================
// 2. BASIC TEMPLATE LITERAL
// ==================================================

const name = "Aman";

console.log(`Hello ${name}`);

// Output:
// Hello Aman

// ==================================================
// 3. ${} KYA HAI?
// ==================================================

// ${} ke andar hum variable ya expression
// likh sakte hain.
//
// ${name}
//      ↑
// variable ki value yahan insert hogi.

const age = 22;

console.log(`My age is ${age}`);

// Output:
// My age is 22

// ==================================================
// 4. VARIABLE + STRING
// ==================================================

const name1 = "Aman";
const college = "CUTM";

console.log(`My name is ${name1} and I study at ${college}.`);

// Output:
// My name is Aman and I study at CUTM.

// ==================================================
// 5. MULTIPLE VARIABLES
// ==================================================

const studentName = "Aman";
const studentAge = 22;
const studentCollege = "CUTM";

console.log(
`My name is ${studentName}. I am ${studentAge} years old. I study at ${studentCollege}.`
);

// Output:
// My name is Aman. I am 22 years old. I study at CUTM.

// ==================================================
// 6. EXPRESSION INSIDE ${}
// ==================================================

// ${} ke andar sirf variable hi nahi,
// JavaScript expression bhi likh sakte hain.

const a = 15;
const b = 25;

console.log(`Sum = ${a + b}`);

// Output:
// Sum = 40

// ==================================================
// 7. MULTIPLICATION
// ==================================================

const price = 500;
const quantity = 3;

console.log(`Total Price = ${price * quantity}`);

// Output:
// Total Price = 1500

// ==================================================
// 8. FUNCTION CALL INSIDE ${}
// ==================================================

function add(x, y) {
return x + y;
}

console.log(`Result = ${add(10, 20)}`);

// Output:
// Result = 30

// ==================================================
// 9. TERNARY OPERATOR INSIDE ${}
// ==================================================

const age2 = 22;

console.log(
`Status: ${age2 >= 18 ? "Adult" : "Minor"}`
);

// Output:
// Status: Adult

// ==================================================
// 10. OBJECT PROPERTY INSIDE ${}
// ==================================================

const student = {
name: "Aman",
age: 22
};

console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);

// Output:
// Name: Aman
// Age: 22

// ==================================================
// 11. ARRAY VALUE INSIDE ${}
// ==================================================

const skills = ["Java", "React", "AWS"];

console.log(`My first skill is ${skills[0]}`);

// Output:
// My first skill is Java

// ==================================================
// 12. MULTI-LINE STRING
// ==================================================

// Normal quotes me multiple lines likhne par
// problem aa sakti hai.
//
// Template literals me directly multiple lines
// likh sakte hain.

const message = `Hello Aman,
Welcome to JavaScript.
Keep learning!`;

console.log(message);

// ==================================================
// 13. TEMPLATE LITERAL WITH CALCULATION
// ==================================================

const marks1 = 80;
const marks2 = 90;
const marks3 = 70;

console.log(
`Total Marks = ${marks1 + marks2 + marks3}`
);

// Output:
// Total Marks = 240

// ==================================================
// 14. TEMPLATE LITERAL WITH METHOD
// ==================================================

const username = "aman";

console.log(`Username: ${username.toUpperCase()}`);

// Output:
// Username: AMAN

// ==================================================
// 15. NORMAL STRING vs TEMPLATE LITERAL
// ==================================================

// Normal string:

const name2 = "Aman";

console.log("Hello " + name2);

// Output:
// Hello Aman

// Template literal:

console.log(`Hello ${name2}`);

// Output:
// Hello Aman

// Template literals usually make complex strings
// easier to read.

// ==================================================
// 16. CONCATENATION vs TEMPLATE LITERAL
// ==================================================

// Concatenation:

const n = "Aman";
const a2 = 22;
const c = "CUTM";

console.log(
"My name is " + n +
". I am " + a2 +
" years old and I study at " + c + "."
);

// Template Literal:

console.log(
`My name is ${n}. I am ${a2} years old and I study at ${c}.`
);

// Same output,
// but template literal is cleaner and easier to read.

// ==================================================
// 17. IMPORTANT: BACKTICK vs QUOTES
// ==================================================

// Single quote:

const x1 = 'Hello';

// Double quote:

const x2 = "Hello";

// Backtick:

const x3 = `Hello`;

// ${} interpolation normally works with backticks:

const user = "Aman";

console.log(`Hello ${user}`);
// Hello Aman

// ==================================================
// 18. COMMON MISTAKE
// ==================================================

// ❌ Wrong:

// console.log("Hello ${user}");

// Output literally:
// Hello ${user}

// Why?
// Because " " normal string hai.
// ${} interpolation ke liye backticks use karo.

// ✅ Correct:

console.log(`Hello ${user}`);

// ==================================================
// 19. ${} KE ANDAR COMPLETE EXPRESSION HO SAKTA HAI
// ==================================================

const num1 = 10;
const num2 = 20;

console.log(`${num1} + ${num2} = ${num1 + num2}`);

// Output:
// 10 + 20 = 30

// ==================================================
// 20. FUNCTION + TEMPLATE LITERAL
// ==================================================

function greet(name) {
return `Welcome ${name}`;
}

console.log(greet("Aman"));

// Output:
// Welcome Aman

// ==================================================
// 🧠 INTERVIEW DEFINITION
// ==================================================

// TEMPLATE LITERAL:
//
// "Template literals are string literals that allow
// embedded expressions using ${} and are written
// using backticks (` `)."

// ==================================================
// 🏆 FINAL MEMORY MAP
// ==================================================

// Template Literal
//        ↓
// Backticks ` `
//        ↓
// ${expression}
//        ↓
// Variable / Calculation / Function / Property
//        ↓
// Final String

// Examples:
//
// `Hello ${name}`
//
// `Sum = ${a + b}`
//
// `Age = ${student.age}`
//
// `Result = ${add(10, 20)}`

// ==================================================
// 🔥 GOLDEN RULE
// ==================================================

// " "  → Normal String
// ' '  → Normal String
// ` `  → Template Literal
//
// ${} → expression ko string ke andar insert karta hai.
