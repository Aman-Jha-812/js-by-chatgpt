const arr = [10,20,30,40,50]

const result = arr.reduce((acc,current)=>{
    return acc + current
},0)
console.log(result);

const cart = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    // { name: "Headphone", price: 1500 },
    { name: "Laptop", price:50000},
    
];


const total = cart.reduce((acc,product)=>{
    return acc + product.price;
},0);
console.log(total)

const fruits = ["apple","banana","apple","orange","apple"]

const res = fruits.reduce((acc,fruit)=>{
        if (acc[fruit]) {
        acc[fruit] = acc[fruit] + 1;
    } else {
        acc[fruit] = 1;
    }

    return acc;
},{});