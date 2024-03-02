const userName = document.getElementById("username");
const password = document.getElementById("password");
const signInBtn = document.getElementById("sign_in");

signInBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    let userNameValue = userName.value.trim();
    let passwordValue = password.value;
    let localUserName = localStorage.getItem("userName").trim();
    let localPassword = localStorage.getItem("password");
    
    if(userNameValue === "" || passwordValue === "" ){
        alert("please fill empty field");
    }else{
        if((localUserName === userNameValue) && (passwordValue === localPassword)){
            window.location = "index.html";
        }else{
            alert("username or password is wrong");
        }      
    }
})