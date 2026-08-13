# JavaScript Built-in Methods — 50+ Practical Notes

> **Goal:** Daily coding + MERN development + Interview revision

---

# 1. STRING METHODS ⭐

String ke saath kaam karne ke liye.

### 1. `length` ⭐

String ki length nikalta hai.

```javascript
const name = "Aman";

console.log(name.length);

// 4
```

> Note: `length` method nahi, **property** hai. Isliye `()` nahi lagate.

---

### 2. `toUpperCase()` ⭐

String ko uppercase karta hai.

```javascript
"Aman".toUpperCase();

// "AMAN"
```

---

### 3. `toLowerCase()` ⭐

String ko lowercase karta hai.

```javascript
"AMAN".toLowerCase();

// "aman"
```

---

### 4. `trim()` ⭐

Beginning aur ending ke extra spaces remove karta hai.

```javascript
const name = "   Aman   ";

console.log(name.trim());

// "Aman"
```

MERN forms me bahut useful.

---

### 5. `trimStart()`

Starting ke spaces remove karta hai.

```javascript
"   Aman".trimStart();

// "Aman"
```

---

### 6. `trimEnd()`

Ending ke spaces remove karta hai.

```javascript
"Aman   ".trimEnd();

// "Aman"
```

---

### 7. `includes()` ⭐

Check karta hai ki string ke andar koi value hai ya nahi.

```javascript
const text = "I love JavaScript";

console.log(text.includes("JavaScript"));

// true
```

Return:

```text
true / false
```

---

### 8. `startsWith()`

Check karta hai string kisi value se start hoti hai ya nahi.

```javascript
"JavaScript".startsWith("Java");

// true
```

---

### 9. `endsWith()`

Check karta hai string kisi value par end hoti hai ya nahi.

```javascript
"JavaScript".endsWith("Script");

// true
```

---

### 10. `indexOf()` ⭐

Value ka first index return karta hai.

```javascript
const text = "JavaScript";

console.log(text.indexOf("S"));

// 4
```

Agar value nahi mili:

```javascript
text.indexOf("x");

// -1
```

---

### 11. `lastIndexOf()`

Last occurrence ka index deta hai.

```javascript
"hello hello".lastIndexOf("hello");

// 6
```

---

### 12. `slice()` ⭐

String ka ek portion nikalta hai.

```javascript
const name = "JavaScript";

console.log(name.slice(0, 4));

// "Java"
```

Original string change nahi hoti.

---

### 13. `substring()`

String ka portion return karta hai.

```javascript
"JavaScript".substring(0, 4);

// "Java"
```

---

### 14. `replace()` ⭐

First matching value replace karta hai.

```javascript
const text = "I like Java";

console.log(text.replace("Java", "JavaScript"));

// I like JavaScript
```

---

### 15. `replaceAll()` ⭐

Saari matching values replace karta hai.

```javascript
const text = "Java Java Java";

console.log(text.replaceAll("Java", "Python"));

// Python Python Python
```

---

### 16. `split()` ⭐

String ko array me convert karta hai.

```javascript
const name = "Aman";

console.log(name.split(""));

// ["A", "m", "a", "n"]
```

Words:

```javascript
"I love JavaScript".split(" ");

// ["I", "love", "JavaScript"]
```

---

# 2. ARRAY METHODS ⭐⭐⭐

MERN/React me **bahut important**.

---

### 17. `push()` ⭐

End me element add karta hai.

```javascript
const arr = [10, 20];

arr.push(30);

console.log(arr);

// [10, 20, 30]
```

Original array change hota hai.

---

### 18. `pop()` ⭐

Last element remove karta hai.

```javascript
const arr = [10, 20, 30];

arr.pop();

console.log(arr);

// [10, 20]
```

---

### 19. `unshift()`

Beginning me element add karta hai.

```javascript
const arr = [20, 30];

arr.unshift(10);

// [10, 20, 30]
```

---

### 20. `shift()`

Beginning ka element remove karta hai.

```javascript
const arr = [10, 20, 30];

arr.shift();

// [20, 30]
```

---

### 21. `includes()` ⭐

Check karta hai value array me hai ya nahi.

```javascript
const arr = [10, 20, 30];

arr.includes(20);

// true
```

---

### 22. `indexOf()` ⭐

Value ka index deta hai.

```javascript
const arr = ["HTML", "CSS", "JS"];

arr.indexOf("CSS");

// 1
```

---

### 23. `lastIndexOf()`

Last occurrence ka index.

```javascript
[10, 20, 10, 30].lastIndexOf(10);

// 2
```

---

### 24. `slice()` ⭐

Array ka portion copy karta hai.

```javascript
const arr = [10, 20, 30, 40];

const result = arr.slice(1, 3);

console.log(result);

// [20, 30]
```

Original array change nahi hota.

---

### 25. `splice()` ⭐

Array ke andar elements **remove/add/replace** kar sakta hai.

```javascript
const arr = [10, 20, 30, 40];

arr.splice(1, 2);

console.log(arr);

// [10, 40]
```

`splice(start, deleteCount)`

---

### 26. `join()` ⭐

Array ko string me convert karta hai.

```javascript
const arr = ["Aman", "Rahul"];

console.log(arr.join(" "));

// "Aman Rahul"
```

---

### 27. `reverse()`

Array ko reverse karta hai.

```javascript
const arr = [10, 20, 30];

arr.reverse();

// [30, 20, 10]
```

⚠️ Original array change hota hai.

---

### 28. `sort()` ⭐⭐⭐

Array sort karta hai.

Strings:

```javascript
["banana", "apple", "mango"].sort();

// ["apple", "banana", "mango"]
```

Numbers ke liye compare function:

```javascript
[50, 10, 100, 5].sort((a, b) => a - b);

// [5, 10, 50, 100]
```

Descending:

```javascript
arr.sort((a, b) => b - a);
```

---

# 3. HIGHLY IMPORTANT ARRAY CALLBACK METHODS ⭐⭐⭐

Ye React/MERN me **daily use** honge.

---

### 29. `forEach()` ⭐⭐⭐

Array ke har element par operation karta hai.

```javascript
const numbers = [10, 20, 30];

numbers.forEach(num => {
    console.log(num);
});
```

Output:

```text
10
20
30
```

⚠️ Usually new array return nahi karta.

---

### 30. `map()` ⭐⭐⭐

Har element ko transform karke **new array** return karta hai.

```javascript
const numbers = [1, 2, 3];

const result = numbers.map(num => num * 2);

console.log(result);

// [2, 4, 6]
```

React me extremely important.

---

### 31. `filter()` ⭐⭐⭐

Condition satisfy karne wale elements ka **new array** banata hai.

```javascript
const numbers = [10, 20, 30, 40];

const result = numbers.filter(num => num > 20);

console.log(result);

// [30, 40]
```

---

### 32. `find()` ⭐⭐⭐

Condition satisfy karne wala **first element** return karta hai.

```javascript
const numbers = [10, 20, 30];

const result = numbers.find(num => num > 15);

console.log(result);

// 20
```

---

### 33. `findIndex()`

Condition satisfy karne wale first element ka index.

```javascript
const numbers = [10, 20, 30];

numbers.findIndex(num => num > 15);

// 1
```

---

### 34. `some()` ⭐

Check karta hai **kam se kam ek element** condition satisfy karta hai ya nahi.

```javascript
const numbers = [10, 20, 30];

numbers.some(num => num > 25);

// true
```

---

### 35. `every()`

Check karta hai **saare elements** condition satisfy karte hain ya nahi.

```javascript
const numbers = [10, 20, 30];

numbers.every(num => num > 5);

// true
```

---

### 36. `reduce()` ⭐⭐⭐

Array ko process karke **single value** banata hai.

Example sum:

```javascript
const numbers = [10, 20, 30];

const total = numbers.reduce((sum, num) => {
    return sum + num;
}, 0);

console.log(total);

// 60
```

Common uses:

```text
Sum
Total price
Counting
Grouping
Object creation
```

---

### 37. `flat()`

Nested array ko flatten karta hai.

```javascript
const arr = [1, [2, 3], [4, 5]];

arr.flat();

// [1, 2, 3, 4, 5]
```

---

### 38. `flatMap()`

`map()` + `flat()` ka combination.

```javascript
const arr = [1, 2, 3];

arr.flatMap(num => [num, num * 2]);

// [1, 2, 2, 4, 3, 6]
```

---

# 4. OBJECT METHODS ⭐⭐⭐

MERN me objects bahut common hain.

---

### 39. `Object.keys()` ⭐⭐⭐

Object ki keys ka array deta hai.

```javascript
const student = {
    name: "Aman",
    age: 22
};

Object.keys(student);

// ["name", "age"]
```

---

### 40. `Object.values()` ⭐⭐⭐

Object ki values ka array.

```javascript
Object.values(student);

// ["Aman", 22]
```

---

### 41. `Object.entries()` ⭐⭐⭐

Key-value pairs ko array me convert karta hai.

```javascript
Object.entries(student);

// [
//   ["name", "Aman"],
//   ["age", 22]
// ]
```

---

### 42. `Object.assign()`

Objects ko merge/copy karne ke liye.

```javascript
const obj1 = {
    name: "Aman"
};

const obj2 = {
    age: 22
};

const result = Object.assign({}, obj1, obj2);

console.log(result);

// { name: "Aman", age: 22 }
```

Modern code me spread operator bhi commonly use hota hai:

```javascript
const result = {
    ...obj1,
    ...obj2
};
```

---

### 43. `Object.hasOwn()` ⭐

Check karta hai object me given property directly present hai ya nahi.

```javascript
const student = {
    name: "Aman"
};

Object.hasOwn(student, "name");

// true
```

---

# 5. NUMBER METHODS ⭐

---

### 44. `Number.isNaN()`

Check karta hai value actual `NaN` hai ya nahi.

```javascript
Number.isNaN(NaN);

// true
```

---

### 45. `Number.isInteger()`

Check karta hai number integer hai ya nahi.

```javascript
Number.isInteger(10);

// true

Number.isInteger(10.5);

// false
```

---

### 46. `Number.parseInt()`

Value ko integer me parse karta hai.

```javascript
Number.parseInt("100px");

// 100
```

---

### 47. `Number.parseFloat()`

Decimal number parse karta hai.

```javascript
Number.parseFloat("10.50px");

// 10.5
```

---

### 48. `toFixed()` ⭐

Decimal places control karta hai.

```javascript
const price = 99.4567;

console.log(price.toFixed(2));

// "99.46"
```

⚠️ Important: `toFixed()` **string return karta hai**.

---

### 49. `Math.round()`

Nearest integer.

```javascript
Math.round(4.6);

// 5
```

---

### 50. `Math.floor()`

Neeche wala integer.

```javascript
Math.floor(4.9);

// 4
```

---

### 51. `Math.ceil()`

Upar wala integer.

```javascript
Math.ceil(4.1);

// 5
```

---

### 52. `Math.max()`

Largest number.

```javascript
Math.max(10, 50, 30);

// 50
```

---

### 53. `Math.min()`

Smallest number.

```javascript
Math.min(10, 50, 30);

// 10
```

---

### 54. `Math.random()` ⭐

0 inclusive se 1 exclusive ke beech random number.

```javascript
Math.random();
```

Random integer 1–10:

```javascript
Math.floor(Math.random() * 10) + 1;
```

---

# 6. JSON METHODS ⭐⭐⭐

MERN me **bahut important** because API/data transfer me JSON common hai.

---

### 55. `JSON.stringify()` ⭐⭐⭐

JavaScript object → JSON string.

```javascript
const student = {
    name: "Aman",
    age: 22
};

const data = JSON.stringify(student);

console.log(data);

// '{"name":"Aman","age":22}'
```

---

### 56. `JSON.parse()` ⭐⭐⭐

JSON string → JavaScript object.

```javascript
const data = '{"name":"Aman","age":22}';

const student = JSON.parse(data);

console.log(student.name);

// Aman
```

### 🧠 Yaad rakho:

```text
Object
   ↓ JSON.stringify()
String
   ↓ JSON.parse()
Object
```

---

# 7. DATE METHODS ⭐⭐

---

### 57. `new Date()`

Current date/time.

```javascript
const date = new Date();

console.log(date);
```

---

### 58. `getFullYear()`

Year deta hai.

```javascript
const date = new Date();

date.getFullYear();

// 2026
```

---

### 59. `getMonth()`

Month deta hai.

```javascript
date.getMonth();
```

⚠️ January = `0`, December = `11`.

---

### 60. `getDate()`

Month ki date deta hai.

```javascript
date.getDate();
```

---

### 61. `getDay()`

Week ka day number.

```javascript
date.getDay();
```

```text
Sunday = 0
Monday = 1
...
Saturday = 6
```

---

# 8. VERY USEFUL TYPE CONVERSION

### 62. `String()`

Value ko string me convert karta hai.

```javascript
String(100);

// "100"
```

---

### 63. `Number()`

Value ko number me convert karta hai.

```javascript
Number("100");

// 100
```

---

### 64. `Boolean()`

Value ko boolean me convert karta hai.

```javascript
Boolean(1);

// true
```

---

# ⭐ TOP 20 — SABSE PEHLE YAAD KARNE WAALE

Agar 64 methods ek saath yaad nahi hote, **pehle ye 20 master karo:**

```text
1.  length
2.  toUpperCase()
3.  toLowerCase()
4.  trim()
5.  includes()
6.  split()
7.  slice()
8.  replace()
9.  push()
10. pop()
11. slice()
12. splice()
13. join()
14. sort()
15. forEach()
16. map()
17. filter()
18. find()
19. reduce()
20. Object.keys()
```

### 🚀 MERN ke liye next-level priority

```text
⭐⭐⭐ map()
⭐⭐⭐ filter()
⭐⭐⭐ find()
⭐⭐⭐ reduce()
⭐⭐⭐ Object.keys()
⭐⭐⭐ Object.values()
⭐⭐⭐ Object.entries()
⭐⭐⭐ JSON.stringify()
⭐⭐⭐ JSON.parse()
⭐⭐⭐ sort((a,b) => a-b)
```

### 🧠 Ek important distinction

```text
METHOD:
arr.push()
arr.map()
name.toUpperCase()

PROPERTY:
arr.length
```

Method ke saath `()` aata hai.

Property ke saath `()` nahi aata.
