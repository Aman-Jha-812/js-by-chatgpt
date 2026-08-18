/*console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

console.log("3");

setTimeout(() => {
    console.log("4");
}, 0);

console.log("5");
*/

//Microtask Queue
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");

//Golden rule
/*
Synchronous Code
       ↓
   Call Stack
       ↓
Call Stack empty?
       ↓
Microtask Queue
(Promise.then / catch / finally)
       ↓
Task/Callback Queue
(setTimeout etc.)

*/

/*
Synchronous
    ↓
Microtask
    ↓
Task/Callback
*/