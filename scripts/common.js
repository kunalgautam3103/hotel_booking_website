headerTemplate();
loginTemplate();
footerTemplate();
contactusTemplate();

 
if( sessionStorage.isLogin ){

    let modal = document.getElementsByClassName("login-modal");
    modal[0].style.display = "none";
    document.getElementById("login").innerHTML="LOGOUT";




}

function loginfunc(){
    if( sessionStorage.isLogin ){

        let modal = document.getElementsByClassName("login-modal");
        modal[0].style.display = "none";
        document.getElementById("login").innerHTML="LOGIN";
        sessionStorage.clear();


    
    }
    else{
        let modal = document.getElementsByClassName("login-modal");
        modal[0].style.display = "block";
        


    }

}

function userLogin(){

    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let username1=username.value;  
    let password1=password.value;
        if(username1!="" && password1!=""){
           sessionStorage.username = username1;
           sessionStorage.password=password1;
          sessionStorage.isLogin=true;
          
           document.getElementById("login").innerHTML="LOGOUT";
            alert(`Welcome back, ${username1}`);
           
            closeModal();
            document.getElementById("login").innerHTML="LOGOUT";
            username1.value="";
            password.innerText="";

           }
           
        }






function headerTemplate(){
    let headtemp =`<a id="logo" href="index.html"><img src="assests/images/logo.png" width="150px" height="100px" alt="logo" ></a>
    <button type="button" id="login"  class="btn btn-light btn-sm" onclick="loginfunc()" >LOGIN</button>`;
    document.getElementById("headid").innerHTML=headtemp;
}
function login() {

    let modal = document.getElementsByClassName("login-modal");
    modal[0].style.display = "block";
}


function closeModal() {
    let modal = document.getElementsByClassName("login-modal");
    modal[0].style.display = "none";
}
function openContactUsModal() {
    let modal = document.getElementsByClassName("contact-modal");
    modal[0].style.display = "flex";
}

function closeContactUsModal() {
    let modal = document.getElementsByClassName("contact-modal");
    modal[0].style.display = "none";
}
function loginTemplate(){
    let log = `<div id="loginx">
    <div class="">
    <span class="close" onclick="closeModal()">X</span>
    
    <h4>Please Login</h4> 
    <div>
    <form id="myform">
    <div class=>
    <label for="username">Username: </label>
    <input type="text" placeholder="Username" id="username" autocomplete="off"/>
    <br />
    <label for="password">Password: </label>
    <input type="password" placeholder="Password" id="password" />
    <br />
    </div>
    </br>
    <div class="mx-auto">
    <button id="login-button" type="button" onclick="userLogin()" class="btn btn-primary mx-auto">Login</button>
    </div>
    </form>
     </div>`;
  
   document.getElementById("login-modal").innerHTML+=log;

}
function footerTemplate(){
    let fot=` <div id="contact"><button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-backdrop="false" data-target="#contact-modal">Contact Us</button> </div>
    <div id="copy">
        <p>
        &copy; 2020 ROOM SEARCH PVT. LTD
        </p>
    </div>
    <div id="social">
    <a href="https://www.facebook.com" target="_blank" ><img class="socialimg" src="assests/images/facebook.png" > </a>
    <a href="https://www.instagram.com" target="_blank" ><img class="socialimg" src="assests/images/instagram.png"  > </a>
    <a href="https://www.twitter.com" target="_blank" ><img class="socialimg" src="assests/images/twitter.png" > </a>
   </div>`
   document.getElementById("foot").innerHTML=fot;
}
function contactusTemplate(){
    let cont=`<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="contact-modal-label">Get in touch</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form>
                <p>
                    Thank you for reaching out!!! <br>
                    Please enter you email and we will get back to you.
                </p>
                <label for="email">Email: </label>
                <input type="text" id="email" name="email" placeholder="Enter your email id" required>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" id="log" class="btn btn-primary" data-dismiss="modal">Sumbit</button>
        </div>
    </div>
</div>`
document.getElementById("contact-modal").innerHTML+=cont;

    }
