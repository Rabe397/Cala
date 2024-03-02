//check-if-there-user
let sign = document.querySelector(".sign");

if(localStorage.getItem("userName")){
    sign.innerHTML = `
        <p class="user-name"> ${localStorage.getItem("userName")} </p> 
        <a  onclick="logOut()"> Log Out </a>
    `
}else{
    sign.innerHTML =`
        <a href="register.html"> Sign Up </a>
        <a href="login.html"> Sign In </a>
    `
}

//log-out
const logOut = ()=>{
    localStorage.clear();
    window.location = "index.html";
}

//navbar
const barsIcon = document.querySelector(".bars-icon");
const timesIcon = document.querySelector(".times-icon");
const navParent = document.querySelector(".site-header nav");

barsIcon.addEventListener("click" , ()=>{
    barsIcon.classList.add("display-none");
    timesIcon.classList.remove("display-none");
    navParent.style.right = "3%";
})

timesIcon.addEventListener("click" , ()=>{
    timesIcon.classList.add("display-none");
    barsIcon.classList.remove("display-none");
    navParent.style.right = "-100%";
})