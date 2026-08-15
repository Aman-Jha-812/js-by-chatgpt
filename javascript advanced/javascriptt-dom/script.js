/*

const elemetn = document.getElementById("he");
elemetn.textContent="hii this is aman"
console.log(elemetn.textContent);


const change=document.querySelectorAll(".message")
change[0].textContent="hii i am learning mern";

change.forEach((element)=>{
    element.textContent="hiii i am learnig mern"
})

elemetn.innerHTML="<b>hi this is my aman</b>"



const element = document.getElementById("msg")
element.innerHTML="<b>Hello Aman</b>"

// classList

const title = document.getElementById("title")
title.classList.add("active");

const title = document.getElementById("title")
title.classList.remove("active");

const title = document.getElementById("title")
title.classList.toggle("active");

console.log(title.classList.contains("active"));


const btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    const heading= document.querySelector("h1");
//console.log(heading.textContent);
heading.textContent="Hello Aman";
})
*/

const btn = document.getElementById("btn");

function handleClick(event) {
    console.log(event.target);
}

btn.addEventListener("click", handleClick);