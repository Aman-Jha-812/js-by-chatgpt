/*
const numbers = [10,20,30];
numbers.push(40);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.unshift(5);
console.log(numbers);

numbers.shift();
console.log(numbers);
*/

const arr = [10,20,30,40,50];

const result = arr.slice(1,4);
console.log(result);
console.log(arr);

const remove = arr.splice(1,2);
console.log(remove);
console.log(arr);

const colors = ["Red","Blue","Green"];
const replace = colors.splice(1,1,"Yellow");
console.log(replace);
console.log(colors);