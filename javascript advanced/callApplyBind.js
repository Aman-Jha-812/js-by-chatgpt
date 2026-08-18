const user = {
    name: "Aman",
    age: 22
};

function introduce(city, profession) {
    console.log(
        `My name is ${this.name}, I am ${this.age} years old, I live in ${city}, and I am a ${profession}.`
    );
}


// ====================
// 1. CALL
// ====================

console.log("----- CALL -----");

introduce.call(user, "Bokaro", "Developer");


// ====================
// 2. APPLY
// ====================

console.log("----- APPLY -----");

introduce.apply(user, ["Bokaro", "Developer"]);


// ====================
// 3. BIND
// ====================

console.log("----- BIND -----");

const newIntroduce = introduce.bind(user, "Bokaro", "Developer");

console.log("Bind function created...");

newIntroduce();

// call() → function ko immediately execute karta hai
// apply() → immediately execute karta hai, arguments array mein leta hai
// bind() → new function banata hai, baad mein execute karte hain