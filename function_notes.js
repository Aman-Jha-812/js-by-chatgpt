// JavaScript — Functions Complete Notes

// ==================================================
// 1. FUNCTION KYA HOTA HAI?
// ==================================================

// Function reusable block of code hota hai.
// Ek baar function likho aur zarurat ke according
// baar-baar call karo.

// Simple example:

function sayHello() {
console.log("Hello World");
}

// Function sirf define karne se execute nahi hota.
// Call karna padta hai.

sayHello();

// ==================================================
// 2. FUNCTION CALL
// ==================================================

// Function ko execute karne ke liye:
// functionName();

function greet() {
console.log("Hello Aman");
}

greet();
// Function call hua → function ke andar ka code execute hua.

// ==================================================
// 3. FUNCTION KO MULTIPLE TIMES CALL KARNA
// ==================================================

function sayHi() {
console.log("Hi");
}

sayHi();
sayHi();
sayHi();

// Same function ko multiple times reuse kar sakte hain.

// ==================================================
// 4. FUNCTION WITH PARAMETER
// ==================================================

// Parameter = function definition ke andar
// banaya gaya variable.

function showName(name) {
console.log("Name: " + name);
}

// name → parameter

// ==================================================
// 5. ARGUMENT
// ==================================================

// Function call karte waqt jo actual value dete hain,
// usko argument kehte hain.

showName("Aman");
// "Aman" → argument

showName("Rahul");
// "Rahul" → argument

// Difference:
//
// function showName(name)
//                     ↑
//                  Parameter
//
// showName("Aman")
//           ↑
//        Argument

// ==================================================
// 6. MULTIPLE PARAMETERS
// ==================================================

function add(a, b) {
console.log(a + b);
}

// a, b → parameters

add(10, 20);
// 10, 20 → arguments
// Output → 30

// ==================================================
// 7. RETURN
// ==================================================

// return function ke result ko function ke bahar
// bhejne ke liye use hota hai.

function addNumbers(a, b) {
return a + b;
}

const result = addNumbers(10, 20);

console.log(result);
// 30

// Flow:
//
// addNumbers(10,20)
//        ↓
//     10 + 20
//        ↓
//      return 30
//        ↓
// result = 30

// ==================================================
// 8. RETURN vs console.log()
// ==================================================

// console.log() → sirf value ko console me print karta hai.
//
// return → value ko function ke bahar bhejta hai.

function test1() {
console.log(100);
}

const x = test1();

// Output:
// 100
//
// Lekin x ki value:
// undefined
//
// Kyunki function ne kuch RETURN nahi kiya.

// --------------------------------------------------

// return example:

function test2() {
return 100;
}

const y = test2();

console.log(y);
// 100

// Yahan 100 function se bahar return hua
// aur y me store ho gaya.

// ==================================================
// 9. IMPORTANT: RETURN KE BAAD CODE EXECUTE NAHI HOTA
// ==================================================

function example() {
return "Hello";

```
console.log("World");
```

}

console.log(example());

// Output:
// Hello

// "World" execute nahi hoga.
// return ke baad function immediately stop ho jata hai.

// ==================================================
// 10. FUNCTION WITHOUT RETURN
// ==================================================

function college() {
console.log("CUTM");
}

const collegeName = college();

console.log(collegeName);

// Output:
// CUTM
// undefined

// Kyunki function ne koi value return nahi ki.

// ==================================================
// 11. FUNCTION RETURN KARKE VALUE STORE KARNA
// ==================================================

function student(name) {
return "Welcome " + name;
}

const student1 = student("Aman");
const student2 = student("Rahul");

console.log(student1);
// Welcome Aman

console.log(student2);
// Welcome Rahul

// ==================================================
// 12. FUNCTION WITH CONDITION
// ==================================================

function checkEvenOdd(num) {

```
if (num % 2 === 0) {
    return "Even";
} else {
    return "Odd";
}
```

}

console.log(checkEvenOdd(10));
// Even

console.log(checkEvenOdd(7));
// Odd

// ==================================================
// 13. FUNCTION TO FIND LARGEST NUMBER
// ==================================================

function largest(a, b, c) {

```
if (a > b && a > c) {
    return a;

} else if (b > a && b > c) {
    return b;

} else {
    return c;
}
```

}

console.log(largest(3, 6, 1));
// 6

// ==================================================
// 14. FUNCTION WITH STRING
// ==================================================

function checkLength(name) {

```
if (name.length >= 5) {
    return "Long String";
} else {
    return "Short String";
}
```

}

console.log(checkLength("Aman"));
// Short String

console.log(checkLength("Rahul"));
// Short String

console.log(checkLength("Rahul Kumar"));
// Long String

// ==================================================
// 15. FUNCTION CAN RETURN ANY DATA TYPE
// ==================================================

function getName() {
return "Aman";
}

function getAge() {
return 22;
}

function getSkills() {
return ["Java", "React", "AWS"];
}

console.log(getName());
// Aman

console.log(getAge());
// 22

console.log(getSkills());
// ["Java", "React", "AWS"]

// ==================================================
// 16. FUNCTION CAN RETURN OBJECT
// ==================================================

function getStudent() {

```
return {
    name: "Aman",
    age: 22,
    college: "CUTM"
};
```

}

const student = getStudent();

console.log(student);

// ==================================================
// 17. FUNCTION DECLARATION
// ==================================================

function greet() {
console.log("Hello");
}

greet();

// Isko Function Declaration kehte hain.

// ==================================================
// 18. ARROW FUNCTION
// ==================================================

// Modern JavaScript me function likhne ka short syntax.

const sayHello = () => {
console.log("Hello World");
};

sayHello();

// Normal Function:
//
// function sayHello() {
//     console.log("Hello World");
// }

// Arrow Function:
//
// const sayHello = () => {
//     console.log("Hello World");
// };

// ==================================================
// 19. ARROW FUNCTION WITH PARAMETERS
// ==================================================

const showName = (name) => {
console.log("Name: " + name);
};

showName("Aman");
showName("Rahul");

// ==================================================
// 20. ARROW FUNCTION WITH RETURN
// ==================================================

const add = (a, b) => {
return a + b;
};

const result2 = add(10, 20);

console.log(result2);
// 30

// ==================================================
// 21. ARROW FUNCTION — IMPLICIT RETURN
// ==================================================

// Agar function ke andar sirf ek expression return
// karna ho to curly braces aur return hata sakte hain.

const addTwo = (a, b) => a + b;

console.log(addTwo(10, 20));
// 30

// Ye dono same kaam karte hain:

const sum1 = (a, b) => {
return a + b;
};

const sum2 = (a, b) => a + b;

// ==================================================
// 22. SINGLE PARAMETER
// ==================================================

// Single parameter me parentheses optional hain.

const greetUser = name => {
return "Hello " + name;
};

console.log(greetUser("Aman"));
// Hello Aman

// Lekin ye bhi completely valid hai:

const greetUser2 = (name) => {
return "Hello " + name;
};

// ==================================================
// 23. NO PARAMETER
// ==================================================

// Parameter nahi hai to () use karna zaruri hai.

const hello = () => {
console.log("Hello");
};

hello();

// ==================================================
// 24. ARROW FUNCTION WITH CONDITION
// ==================================================

const check = (num) => {

```
if (num % 2 === 0) {
    return "Even";
} else {
    return "Odd";
}
```

};

console.log(check(10));
// Even

console.log(check(7));
// Odd

// ==================================================
// 25. FUNCTION FLOW
// ==================================================

// Example:

function multiply(a, b) {
return a * b;
}

const answer = multiply(5, 4);

console.log(answer);

// Flow:
//
// 1. Function define hua
//
// 2. multiply(5,4) call hua
//
// 3. a = 5
//    b = 4
//
// 4. a * b
//    5 * 4 = 20
//
// 5. return 20
//
// 6. answer = 20
//
// 7. console.log(answer)
//    → 20

// ==================================================
// 26. PARAMETER vs ARGUMENT
// ==================================================

// Parameter:

function greetPerson(name) {
console.log(name);
}
// name → PARAMETER

// Argument:

greetPerson("Aman");
// "Aman" → ARGUMENT

// ==================================================
// 27. RETURN vs console.log — GOLDEN RULE
// ==================================================

// console.log():

function example1() {
console.log("Hello");
}

const a = example1();

// "Hello" console me print hoga.
// a → undefined

// return:

function example2() {
return "Hello";
}

const b = example2();

// "Hello" b ke andar store hoga.
// b → "Hello"

// Simple memory trick:
//
// console.log() → SCREEN PAR DIKHAO
//
// return → VALUE BAHAR BHEJO

// ==================================================
// 28. FUNCTION + VARIABLE
// ==================================================

function getPrice() {
return 500;
}

const price = getPrice();

console.log(price);
// 500

// ==================================================
// 29. FUNCTION REUSABILITY
// ==================================================

function calculateSquare(num) {
return num * num;
}

console.log(calculateSquare(2));
// 4

console.log(calculateSquare(5));
// 25

console.log(calculateSquare(10));
// 100

// Ek function → multiple inputs → multiple results.

// ==================================================
// 🧠 INTERVIEW DEFINITIONS
// ==================================================

// FUNCTION:
// "A function is a reusable block of code designed
// to perform a specific task."

// PARAMETER:
// "A parameter is a variable defined in a function
// declaration."

// ARGUMENT:
// "An argument is the actual value passed to a function
// when it is called."

// RETURN:
// "The return statement sends a value back from the
// function and stops its execution."

// ARROW FUNCTION:
// "An arrow function is a shorter syntax for writing
// functions introduced in modern JavaScript."

// ==================================================
// 🏆 FINAL MEMORY MAP
// ==================================================

// Function:
//
// define
//    ↓
// call
//    ↓
// parameters receive arguments
//    ↓
// code executes
//    ↓
// return value (if any)
//    ↓
// value can be stored/used outside

// MOST IMPORTANT:
//
// console.log() → print
//
// return → send value back
//
// parameter → function ke andar variable
//
// argument → function call ki actual value
//
// arrow function → modern shorter function syntax
//
// implicit return → arrow function me expression
//                  automatically return hota hai


/*
Function  → reusable code
Parameter → function ke andar variable
Argument  → call karte waqt di gayi value
return    → value function ke bahar bhejta hai
console.log → sirf console me print karta hai
*/