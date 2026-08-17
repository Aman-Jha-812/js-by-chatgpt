
// case 1: varaiable global hai

let name = "Aman";
 const outer = ()=>{
    const inner = ()=>{
        
        console.log(name);
    }
    inner();
 }
 outer();
 
  // case 2:- variable outer / global hain per outer ko first priority hoga
 let name = "Aman";

const outer = () => {

    let name = "Rahul";

    const inner = () => {
        console.log(name);
    }

    inner();
}

outer();

// case 3: variable global/outer/inner but inner prefere 
let name = "Aman";

const outer = () => {

    let name = "Rahul";

    const inner = () => {

        let name = "Gautam";

        console.log(name);
    }

    inner();
}

outer();
