const loginBtn = document.getElementsByClassName("login-btn");
const okBtn = document.getElementById("ok-btn")
const xBtn = document.getElementsByClassName("close-btn")
const loginPrompt = document.getElementById("login-message")
const popUpBox = document.getElementById("pop-up")
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBox = document.getElementById("login");
const registerForm = document.getElementById("register");

function closeGo(){
    popUpBox.style.display = "none";
    
}
function createAccount(){
    loginBox.style.display = "none";
    registerForm.style.display = "block"
}
function loginAccount(){
    loginBox.style.display = "block";
    registerForm.style.display = "none";
}
function isEmpty(val){
    if(val === "") return true;
    return false;
}
function registerAccount(){
    const r_user = document.getElementById("r_username").value;
    const r_pass = document.getElementById("r_pass").value;
    const r_email = document.getElementById("email").value;
    const r_name = document.getElementById("name").value;

    

    if (isEmpty(r_name.trim())){
        loginPrompt.innerHTML = "please enter a name!";
    }
    else if (isEmpty(r_user.trimStart())){
        loginPrompt.innerHTML = "please enter an username!";
    }
    else if (isEmpty(r_pass.trimStart())){
        loginPrompt.innerHTML = "please enter a password!";
    }
    else if (isEmpty(r_email.trimStart())){
        loginPrompt.innerHTML = "please enter your email!";
    }
    else{
        const un = localStorage.getItem("username");
        const pw = localStorage.getItem("password");
        const em = localStorage.getItem("email");
        const nm = localStorage.getItem("name");
        if(un && pw && em && nm) loginPrompt.innerHTML = "you can only create one account at a time!";
        else{
            loginPrompt.innerHTML = "account successfully registered!";

            localStorage.setItem("username",r_user);
            localStorage.setItem("name",r_name);
            localStorage.setItem("email",r_email);
            localStorage.setItem("password",r_pass);
        }
        console.log(un,pw,em,nm);
    }
    popUpBox.style.display = "block";
}
function LoginFunction(){
    const un = localStorage.getItem("username");
    const pw = localStorage.getItem("password")
    if(username.value === un && password.value === pw){
        loginPrompt.innerHTML = "Login Successfully!";
        okBtn.style.display = "block";
    }
    else{
        loginPrompt.innerHTML = "Invalid username or password!";
        okBtn.style.display = "none";
    }
    popUpBox.style.display = "block";
}
function okayGo(){
    setTimeout(() => {
        window.location.href='route/dashboard.html';
    }, 1000);
}