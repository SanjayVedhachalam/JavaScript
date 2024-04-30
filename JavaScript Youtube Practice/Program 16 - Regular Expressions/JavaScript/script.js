function validate(){
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    var user_regx = /^E[0-9]{1,3}-[a-z]/; // ^ - should start with if ^ symbol is out, [] - values accepted, {} - length how much they should be
    
    if(user_regx.test(username.value)){
        alert("Username correct");
        return true;
    }
    else{
        username.style.border = "solid red 0.1rem";
        return false;
    }
}