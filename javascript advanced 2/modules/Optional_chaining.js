const user = {
    //name: "Aman",
    profile: {
        email:"aman@gmail.com"
    }
}

console.log(user.name)
console.log(user.profile?.email);
console.log(user.profile?.address?.city)




//Optional chaining (?.) is used to safely access nested properties. If a property in the chain is null or undefined, JavaScript stops and returns undefined instead of throwing an error.

// nullish coalescing

console.log(user.name ?? "Guest")


const username = "";

console.log(username || "Guest"); // OR operator (left side ki value ko check  karta hai .)

const age = 0;

console.log(age || 18);


const isLoggedIn = false;

console.log(isLoggedIn || true);

// ||  → "Value falsy hai kya?"
// ??  → "Value null ya undefined hai kya?"

// ||  → 0, "", false ko bhi replace karega
// ??  → sirf null / undefined ko replace karega