function formFunction(event){
    event.preventDefault();
    let lemail = document.getElementById("email").value;
    let pass1 = document.getElementById("password1").value;
    const user = JSON.parse(localStorage.getItem("user")); 
    let name = user["name"];
    let email = user["email"];
    let password = user["password"];
    if(lemail == email && pass1 == password){
        console.log("Log In Success");
        return;
    }
    else if(lemail == email && pass1!=password){
        console.log("wrong password");
        return;
    }
    console.log("Account does not exist");
}