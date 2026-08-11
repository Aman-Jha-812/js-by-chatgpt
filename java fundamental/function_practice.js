function student(name){
    return ("Welcome "+name);
}

const x = student("Aman");
console.log(x);
const y = student("Rahul");
console.log(y);

function Add(a,b){
    return (a+b);
}
const a = console.log (Add(10,70));

function check(num){
    //num %2 == 0 (kya ho sakta hai)
    if(num % 2 === 0){
        return "even";
}
    else return "odd";
}

let b =check(10);
console.log(b);


function numbers(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else return c;
}

const abc = numbers(3,6,1);
console.log(abc);


function aman (name){
    if(name.length>=5){
        return "LongString";
    }
    else return "Short String"
}

const n = aman("greek");
console.log(n);