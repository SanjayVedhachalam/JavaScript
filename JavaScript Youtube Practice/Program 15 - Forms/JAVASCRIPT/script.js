function validation(){
    var username = document.getElementById("name");
    var password = document.getElementById("password");

    if(username.value == "" || password.value == "" || password.value.trim() == ""){
        //alert("No blank values allowed");
        username.style.border = "solid red 0.1rem";
        document.getElementById("username-label").style.visibility = "visible";
        password.style.border = "solid red 0.1rem";
        return false;
    }
    else if(password.value.trim().length<8){
        alert("Password should be more than 8 characters");
        return false;
    }
    else{
        return true;
    }
}