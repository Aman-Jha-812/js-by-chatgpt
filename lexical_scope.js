let name = "Aman";

function outer() {
    let name = "Rahul";

    function inner() {
        console.log(name);
    }

    return inner;
}

const test = outer();

test();