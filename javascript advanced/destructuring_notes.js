// JavaScript — Array Destructuring Notes

// ==========================================
// 1. BASIC ARRAY DESTRUCTURING
// ==========================================

const fruits = ["Apple", "Banana", "Mango"];

const [first, second, third] = fruits;
// first  → "Apple"   (index 0)
// second → "Banana"  (index 1)
// third  → "Mango"   (index 2)

console.log(first);
console.log(second);
console.log(third);

// ==========================================
// 2. SKIP A VALUE
// ==========================================

const numbers = [10, 20, 30];

const [a, , c] = numbers;
// a → 10
// second position ko comma ke through skip kiya
// c → 30

console.log(a);
console.log(c);

// ==========================================
// 3. SIRF THIRD VALUE NIKALNA
// ==========================================

const values = [10, 20, 30, 40];

const [, , thirdValue] = values;
// index 0 → skip
// index 1 → skip
// index 2 → thirdValue = 30

console.log(thirdValue);

// ==========================================
// 4. VARIABLES KAM, ARRAY BADA
// ==========================================

const nums = [10, 20, 30, 40, 50];

const [x, y] = nums;
// x → 10
// y → 20
// 30, 40, 50 ko koi variable nahi mila
// isliye unhe destructure nahi kiya gaya

console.log(x);
console.log(y);

// ==========================================
// 5. VARIABLES ZYADA, ARRAY CHHOTA
// ==========================================

const smallArray = [10, 20];

const [p, q, r] = smallArray;
// p → 10
// q → 20
// r → undefined
// kyunki array me third value available nahi hai

console.log(p);
console.log(q);
console.log(r);

// ==========================================
// 6. DEFAULT VALUE
// ==========================================

const marks = [80, 90];

const [math, english, science = 70] = marks;
// math → 80
// english → 90
// science → 70
// science ki value array me nahi thi,
// isliye default value 70 use hui

console.log(math);
console.log(english);
console.log(science);

// ==========================================
// 7. DEFAULT VALUE LEKIN ARRAY ME VALUE AVAILABLE HAI
// ==========================================

const scores = [80, 90, 95];

const [m1, m2, m3 = 70] = scores;
// m1 → 80
// m2 → 90
// m3 → 95
// 70 use nahi hoga because 95 already available hai

console.log(m3);

// ==========================================
// 8. REST WITH ARRAY DESTRUCTURING
// ==========================================

const skills = ["Java", "React", "Node", "AWS"];

const [firstSkill, ...rest] = skills;
// firstSkill → "Java"
// rest → ["React", "Node", "AWS"]
// ...rest remaining saari values ko collect karta hai

console.log(firstSkill);
console.log(rest);

// ==========================================
// 9. REST VARIABLE KA NAAM KUCH BHI HO SAKTA HAI
// ==========================================

const technologies = ["HTML", "CSS", "JavaScript", "React"];

const [frontend, ...others] = technologies;
// frontend → "HTML"
// others → ["CSS", "JavaScript", "React"]
// "others" koi special keyword nahi hai
// ye sirf variable ka naam hai

console.log(frontend);
console.log(others);

// ==========================================
// 10. REST WITH SKIPPING
// ==========================================

const data = [10, 20, 30, 40];

const [, second, ...remaining] = data;
// index 0 → skip
// second → 20
// remaining → [30, 40]

console.log(second);
console.log(remaining);

// ==========================================
// 11. REST KO BEECH ME NAHI RAKH SAKTE
// ==========================================

// ❌ Invalid

// const [...rest, last] = numbers;

// ...rest ko generally last me hona chahiye,
// kyunki ye remaining saari values collect karta hai.

// ==========================================
// 12. OBJECT DESTRUCTURING VS ARRAY DESTRUCTURING
// ==========================================

// OBJECT → { }

const student = {
name: "Aman",
age: 22
};

const { name, age } = student;
// Object me property/key ke naam ke basis par value milti hai.

// ARRAY → [ ]

const students = ["Aman", "Rahul", "Rohit"];

const [student1, student2, student3] = students;
// Array me position/index ke basis par value milti hai.

// ==========================================
// GOLDEN RULE
// ==========================================

// Object Destructuring:
// const { name, age } = student;
// → KEY / PROPERTY ke basis par

// Array Destructuring:
// const [first, second] = fruits;
// → POSITION / INDEX ke basis par

// ==========================================
// IMPORTANT: ...rest vs SPREAD
// ==========================================

// Destructuring ke andar:

const [firstItem, ...remainingItems] = numbers;
// ... → remaining values ko COLLECT karta hai
// Isse REST kaha jata hai.

// Array/Object create ya copy karte waqt:

const copy = [...numbers];
// ... → values ko SPREAD karta hai
// Isse SPREAD OPERATOR kaha jata hai.

// Same "..." symbol hai,
// lekin context ke according REST ya SPREAD ka kaam karta hai.


/* 
[a, b, c]          → normal
[a, , c]           → skip
[a, b = 100]       → default value
[first, ...rest]   → remaining values collect
*/
/*
Aur sabse important:

Array → [] → position/index
Object → {} → property/key
...rest → remaining values collect
*/