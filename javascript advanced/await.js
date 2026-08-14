//async/await
//async and await make handling promises easier  and provide a synchronous-looking syntax.
//*Syntactic sugar over promises
//* Makes asynchronous code look and behave more like synchronous code
//Uses try/catch for error handling
//*Allows sequential async operation with clean syntax

function getuser(){
    return Promise.resolve("Aman")
}

async function showuser(){
    try{
        const result= await getuser();
        console.log(result)
    }
    catch(error){
        console.log(error);
    }
}

showuser();

// Q1

function getData() {
    return Promise.resolve(10);
}

async function calculate() {
    const a = await getData();
    const b = a * 2;

    return b + 5;
}

calculate().then((result) => {
    console.log(result);
});

//Q2.
function getData() {
    return Promise.reject("Failed");
}

async function test() {
    try {
        const result = await getData();
        console.log("A", result);
    } catch (error) {
        console.log("B", error);
    }

    console.log("C");
}

test();

//q3 
function getData() {
    return Promise.resolve(10);
}

async function test() {
    try {
        const result = await getData();

        if (result > 5) {
            return result * 2;
        }

        return result;
    } catch (error) {
        return 0;
    }
}

test().then((value) => {
    console.log(value);
});

//q4
function getData() {
    return Promise.resolve(10);
}

async function test() {
    try {
        const a = await getData();
        const b = a + 5;

        if (b > 12) {
            throw new Error("Too high");
        }

        return b;
    } catch (error) {
        return "Error handled";
    }
}

test().then((result) => {
    console.log(result);
});