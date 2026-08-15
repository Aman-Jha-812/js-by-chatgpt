const login = document.getElementById("loginForm")
const message= document.getElementById("message")
const email = document.getElementById("email")
const password = document.getElementById("password")
const btn = document.getElementById("btn")
const img = document.getElementById("photo");
photo.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFn1S4XaghcfZ5O3FEkDnp3gdS-ZirrrVhhQpDcDB7ew&s=10";
login.addEventListener("submit",(event)=>{
    event.preventDefault();
    // console.log(email.value);
    // console.log(password.value);

    if(email.value === ""|| password.value === ""){
        message.textContent= "please enter email and password";
    }
    else if(email.value === "aman@gmail.com" && password.value === "12345"){
        message.textContent= "Login successful";
    }
    else {
        message.textContent="Invalid email or password";
    }
})