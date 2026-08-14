console.log("hello")
setTimeout(()=>{
  console.log("hii");
},2000);
console.log("end");

function getuser(){
  return Promise.resolve("Aman")
}

async function showuser (){
  const result = await getuser();
  console.log(result)

}

showuser();