function formFunction(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass1 = document.getElementById("password1").value;
    let pass2 = document.getElementById("password2").value;
    
    if(pass1 == pass2){
        let udetails = {
        "name": name,
        "email": email,
        "password": pass1,
    }
        localStorage.setItem("user",JSON.stringify(udetails));
        console.log("Account Created Successfully!!");
        
    }
}