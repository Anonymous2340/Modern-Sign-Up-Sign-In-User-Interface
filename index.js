"use strict";

const theme = document.querySelector("body");
const signBtn = document.getElementById("sign-btn");
const showSignInPWD = document.getElementById("show-pwd-sign-in");
const logBtn = document.getElementById("log-btn");
const signInPwd = document.getElementById("pwd-show");
const eyePwd = document.getElementById("eye");
console.log(signInPwd.type)
console.log(eyePwd.classList)

signBtn.addEventListener("click", ()=> {
    theme.classList.toggle("active");
});

logBtn.addEventListener("click", ()=>{
    theme.classList.toggle("active");
});

showSignInPWD.addEventListener("click", ()=>{
    if (signInPwd.type.toLowerCase() == "password") {
        signInPwd.type = "text";
    } else {
        signInPwd.type = "password";
    }

    if (eyePwd.classList.contains("fa-eye")) {
        eyePwd.classList.remove("fa-eye");
        eyePwd.classList.add("fa-eye-slash");
    } else {
        eyePwd.classList.remove("fa-eye-slash");
        eyePwd.classList.add("fa-eye");
    }
});