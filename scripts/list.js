let params = window.location.href.split("?")[1];  //recipe=dalfry
let cityName = decodeURI(params.split("=")[1]); //dalfry



const data1 = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		var arr=JSON.parse(this.responseText).data;
		for(var i=2; i<arr.length; i++  ){
			addToHome(arr[i].result_object);
          
		}
		
	}
});

xhr.open("GET", `https://travel-advisor.p.rapidapi.com/locations/search?query=${cityName}`);
xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "98b4ff8ae0msh6b13aa5a3a61a5dp1b8761jsn39d9dcf4a256");

xhr.send(data1);

function addToHome(detail){
    var link=detail.photo.images.small.url;
	
	let hoteldiv=`<div class="hotel" style="cursor: pointer" onclick="hoteldetails(${detail.location_id})" location="${detail.location_id}" >

	<img src="${link}" class="cityimg">
	<div class="info">
		<h3>${detail.name}</h3>
		<div id="rating">
		    <span>${detail.rating}</span>
			<span class="fa fa-star checked" id="1"></span>
			
		</div>
		<p>${cityName}</p>
	</div>
</div>`
var refcont=document.getElementById("home");
refcont.innerHTML+=hoteldiv;
}

function hoteldetails(hotel){
	
	window.location.href = `detail.html?ho=${hotel}`;
}