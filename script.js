const loginBtn = document.getElementsByClassName("login-btn");
const okBtn = document.getElementById("ok-btn")
const xBtn = document.getElementsByClassName("close-btn")
const loginPrompt = document.getElementById("login-message")
const popUpBox = document.getElementById("pop-up")
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBox = document.getElementById("login");
const registerForm = document.getElementById("register");
const db = document.getElementById("parent-card")
const logBox = document.getElementById("login-box");

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

    const p1 = document.getElementById("p1");
    const p2 = document.getElementById("p2");
    const p3 = document.getElementById("p3");

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
        p1.innerHTML = localStorage.getItem("name");
        p2.innerHTML = localStorage.getItem("username");
        p3.innerHTML = localStorage.getItem("email");
    }
    else{
        loginPrompt.innerHTML = "Invalid username or password!";
        okBtn.style.display = "none";
    }
    popUpBox.style.display = "block";
}
function okayGo(){
    setTimeout(() => {
        logBox.style.display = "none";
        popUpBox.style.display = "none";
        db.style.display = "grid";
    }, 1000);
}


const logout = document.getElementById("logout");

logout.addEventListener("click", ()=>{
    logBox.style.display = "block";
    db.style.display = "none";
    popUpBox.style.display = "none";
});
const inpImg = document.getElementById("up-img")
const img = document.getElementById("pfp")

inpImg.addEventListener("change", ()=>{
    const fl = inpImg.files[0];
    if(fl){
        img.src = URL.createObjectURL(fl);
    }
});


const delMyAcc = document.getElementById("delAcc");

delMyAcc.addEventListener("click", ()=>{
    localStorage.clear();
    loginPrompt.innerHTML = "Successfully Deleted";
    popUpBox.style.display = "block";
    db.style.display = "none";
    setTimeout(()=>{
        popUpBox.style.display = "none";
        logBox.style.display = "block";
    },3000);
});