
//import add from "./math.js"  // at the time of default export we use this 

import{add,subtract,multiply,divide} from "./math.js"

console.log(add(10,20),subtract(50,40),multiply(2,4),divide(4,2));

// import { add as sum, multiply as product } from "./math.js";  //Ye default export nahi, balki named exports ko alias karna hai.