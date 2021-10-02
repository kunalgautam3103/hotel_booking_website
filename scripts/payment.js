
if(sessionStorage.isLogin) {

    document.getElementById("login").innerHTML="LOGOUT";
    var refbtn=document.getElementById("paybutton");
    refbtn.disabled = false;
}
else{
    refbtn.disabled = true;
}
function userLogin(){

    let username1 = document.getElementById("username").value;
    let password1 = document.getElementById("password").value;
    
        if(username1!=undefined && password1!=undefined){
           sessionStorage.username = username1;
           sessionStorage.password=password1;
           sessionStorage.isLogin=true;
           document.getElementById("login").innerHTML="LOGOUT";
            alert(`Welcome back, ${username1}`);
            closeModal();
            document.getElementById("login").innerHTML="LOGOUT";
            var refbtn=document.getElementById("paybutton");
           refbtn.disabled = false;

           }

        }
function paybut(){
    var refbtn=document.getElementById("paybutton");
    alert("Hi your Booking is Successful!!!");
}
function loginfunc(){
    if( sessionStorage.isLogin ){
    
        let modal = document.getElementsByClassName("login-modal");
        modal[0].style.display = "none";
        document.getElementById("login").innerHTML="LOGIN";
        sessionStorage.clear();
        var refbtn=document.getElementById("paybutton");
           refbtn.disabled = true;



    
    }
    else{
        let modal = document.getElementsByClassName("login-modal");
        modal[0].style.display = "block";
        


    }
}