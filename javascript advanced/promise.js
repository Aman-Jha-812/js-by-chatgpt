/*
const promise = new Promise((resolve, reject)=>{
    resolve("Data resolved")
})
promise
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        console.log("finally")
    })
*/

    //promise chainig

    /*

    const promise =new Promise((resolve,reject)=>{
        resolve(5)
    })
    promise 
    
    .then((result)=>{
        return result = 5*2;
    })
    .then((result)=>{
        return result = result+10;
    })
    .then((result)=>{
        console.log(result)
    }) */

const promise = new Promise((resolve, reject) => {
    resolve(10);
});

promise
    .then((result) => {
        return new Promise((resolve, reject) => {
            resolve(result * 2);
        });
    })
    .then((result) => {
        console.log(result);
    });
