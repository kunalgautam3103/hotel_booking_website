let params = window.location.href.split("?")[1];  //recipe=dalfry
let cityName = decodeURI(params.split("=")[1]); 
console.log(cityName);

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
        var arr=JSON.parse(this.responseText).data[0];
        addContent(arr);
	}
});

xhr.open("GET", `https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${cityName}`);
xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "98b4ff8ae0msh6b13aa5a3a61a5dp1b8761jsn39d9dcf4a256");

xhr.send(data);

const data1 = null;

const xhr1 = new XMLHttpRequest();
xhr1.withCredentials = false;

xhr1.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
        var arr1=JSON.parse(this.responseText).data;
        var cor1=`<div class="carousel-item active">
        <img class="slider-image" id="img1" class="d-block w-100" src="${arr1[0].images.original.url}" alt="First slide">
    </div>`
    document.getElementById("cop").innerHTML+=cor1;
        for(var i=1; i<10; i++){
      addCoresal(arr1[i].images.original.url);
        }
	}
});

xhr1.open("GET", "https://travel-advisor.p.rapidapi.com/photos/list?location_id=2233968");
xhr1.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
xhr1.setRequestHeader("x-rapidapi-key", "98b4ff8ae0msh6b13aa5a3a61a5dp1b8761jsn39d9dcf4a256");

xhr1.send(data);

function addContent(member){
document.getElementById("hotelname").innerText=member.name;
document.getElementById("descinfo").innerText=member.description;
for(var i=0; i<8; i++ ){
    let amd=`<li>${member.amenities[i].key}</li>`
    document.getElementById("unorder").innerHTML+=amd;
}
}

function addCoresal(mem){
    var cor= `<div class="carousel-item">
        <img class="slider-image" id="img3" class="d-block w-100" src="${mem}" alt="Third slide">
    </div>`

  document.getElementById("cop").innerHTML+=cor;
}


function f12(){
    
    let name1=document.getElementById("name")
    let from=document.getElementById("fromDate");
    let to=document.getElementById("toDate");
    
    sessionStorage.adultname=name1.value;
    

    let date1 = from.value;
    let date2 = to.value;
    sessionStorage.to=date1;
    sessionStorage.from=date2;
    sessionStorage.fixprice=1000;
    var d1=new Date(date1);
    var d2=new Date(date2);
console.log(typeof date1);
var Difference_In_Time = d2.getTime()- d1.getTime()  ;
  
var Diff = Difference_In_Time / (1000 * 3600 * 24);
var count=document.getElementById("adult").value;
var total=count*Diff*1000;
sessionStorage.numberofadult=count;
var refprice=document.getElementById("price");
refprice.removeAttribute("readonly");
refprice.value=total;
sessionStorage.breakdown="Rs1000" +"  x "+count +" Adults" +" x "+ Diff +" Nights";
sessionStorage.totalprice=total;

refprice.innerText=total;
}

document.getElementById("book-now").addEventListener("click", function() {
    window.location.href = `payment.html?hotel=${cityName}`;
  });
//document.getElementById("but").setAttribute("onclick", directtopay(cityName));
function directtopay(cityName1){
    
   // window.location.href = `payment.html?hotel=${cityName1}`;
   // console.log(dff);
}
function myFunction() {
    
    var date1=document.getElementById("fromDate").value;
    var date2=document.getElementById("toDate");
    date2.setAttribute("min",date1);
    console.log(date1);
    }
