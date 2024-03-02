const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const signUpBtn = document.getElementById("sign_up");

signUpBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    let userNameValue = userName.value;
    let emailValue = email.value;
    let passwordValue = password.value;
    if(userNameValue === "" || emailValue === "" || passwordValue === "" ){
        alert("please fill empty field");
    }else{
        localStorage.setItem("userName" , userNameValue);
        localStorage.setItem("email" , emailValue);
        localStorage.setItem("password" , passwordValue);
        window.location = "login.html";
    }
})