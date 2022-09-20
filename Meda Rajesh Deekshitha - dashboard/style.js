function login(){
    var username = document.getElementById("username").value;
    var pwd = document.getElementById("pwd").value;

    if(username==''){
        alert("please enter the username")
    }
    else if(pwd.length<6){
        alert("password should be more than 6  charcters")
    }
    else if(pwd.length>10){
        alert("password should be less than 10 charcters")
    }
    else if(pwd.value=="password"){
        alert("password cannot be password")
    }
    else{
        alert("Succesful Login")
    }
    console.log("your username:"+username+"\nyour password:"+pwd)
}