let params = window.location.href.split("?")[1];  
let cityName = decodeURI(params.split("=")[1]); 

console.log(cityName);

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;
document.getElementById("wrapper").style.display="none";

		
xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        
		
        var arr=JSON.parse(this.responseText).data[0];
        
        addContent(arr);
        window.document.getElementById("wrapper").style.display="block";
		window.document.getElementById("loader").style.display="none";
	}
});

xhr.open("GET", `https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${cityName}`);
xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "d699213266msh1848c1d57c9f7dep1211bdjsn5f3c24e2a206");

xhr.send(data);

display();
function addContent(arr){
    let hotname=`${arr.name}`;
    let rank=`${arr.address}`;
    let add=`${arr.ranking}`;

    document.getElementById("hotelName").innerText=hotname;
    document.getElementById("hotelAddress").innerText=add;
    document.getElementById("hotelcount").innerText=rank;
    document.getElementById("srcimg").setAttribute("src",`${arr.photo.images.large.url}`)
}

function display(){
    
    let content=`
    <p id=name><span class="heading bold">Name:</span> ${sessionStorage.getItem('adultname')}</p>
    <p id="adults"><span class="heading bold">Number of Adults:</span> ${sessionStorage.getItem('numberofadult')} </p>
    <p id="to"><span class="heading bold">Check-in Date:</span> ${sessionStorage.getItem('to')}</p>
    <p id="from"><span class="heading bold"> Check-out Date: </span> ${sessionStorage.getItem('from')}</p>
    `
    document.getElementById("contactDetails").innerHTML=content;
    let content1=` <p id="break"><span class="heading bold">Traficc Breakdown: </span> ${sessionStorage.getItem('breakdown')} </p>
    <p id="totalamounttopay"><span class="heading bold">Total Amount: </span> ${sessionStorage.getItem('totalprice')} </p>`;
    document.getElementById("pay").innerHTML+=content1;

    //document.getElementById("name").innerText+=sessionStorage.getItem('adultname');
 
   // document.getElementById("break").innerText+=sessionStorage.getItem('breakdown');
    //document.getElementById("amounttopay").innerText+=sessionStorage.getItem('totalprice');
    
}
if(sessionStorage.isLogin) {

    document.getElementById("login").innerHTML="LOGOUT";
    var refbtn=document.getElementById("paybutton");
    refbtn.disabled = false;
}
else{
    //refbtn.disabled = true;
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