function formFunction2(event){
    event.preventDefault();
    let lemail = document.getElementById("lemail").value;
    let pass1 = document.getElementById("lpassword").value;
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