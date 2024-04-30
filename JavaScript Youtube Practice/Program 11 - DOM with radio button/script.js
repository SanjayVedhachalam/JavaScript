function fun1(){
    var rd1=document.getElementById("rd1");
    var rd2=document.getElementById("rd2");
    if(rd1.checked==true){
        alert("The option selected is "+rd1.value);
    }
    else if(rd2.checked==true){
        alert("The option selected is "+rd2.value);
    }
    else{
        alert("No option selected")
    }
}