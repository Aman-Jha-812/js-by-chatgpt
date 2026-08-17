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


const container = document.getElementById("container");
const paragraph = document.createElement("p");
paragraph.textContent = "I am leaving DOM";
container.appendChild(paragraph);

const list = document.createElement("li");
const list1 = document.createElement("li");
const ulist = document.createElement("ul");
list.textContent= "Learn Javascript";
list1.textContent="Learn DOM";

ulist.appendChild(list);
ulist.appendChild(list1);
container.appendChild(ulist);
list1.remove();