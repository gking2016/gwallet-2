const user = JSON.parse(localStorage.getItem("user")); 
let user_name = user["name"];

function InitializeUser(){
    document.getElementById("user_name").innerHTML = user_name;
}