function initMap() {
let params = window.location.href.split("?")[1]; 
let cityName = decodeURI(params.split("=")[1]);
const data1 = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

document.getElementById("wrapper").style.display="none";
xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		document.getElementById("wrapper").style.display="block";
		document.getElementById("loader").style.display="none";
		var arr=JSON.parse(this.responseText).data;
		
		    const uluru = { lat: parseFloat(arr[1].result_object.latitude), lng: parseFloat(arr[1].result_object.longitude)};
			//console.log(uluru)
	        map = new google.maps.Map(document.getElementById("map"), {
	         zoom: 10,
	        center: uluru,
		
	});

		for(var i=2; i<arr.length; i++  ){
			addToHome(arr[i].result_object);
			var hotname=arr[i].result_object.name;
			var hotid=arr[i].result_object.location_id;
			const uluru1 = { lat: parseFloat(arr[i].result_object.latitude), lng: parseFloat(arr[i].result_object.longitude)};
		//	console.log(uluru1);
			load(uluru1,hotname,hotid);

		}
		
		
	}
});

xhr.open("GET", `https://travel-advisor.p.rapidapi.com/locations/search?query=${cityName}`);
xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "d699213266msh1848c1d57c9f7dep1211bdjsn5f3c24e2a206");

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
 function load(uluru1,hotname,hotelid){
	const contentString =
	  `<div id="content">
	  <p><b>${hotname}</b>
	  <div>
	  <a href="detail.html?ho=${hotelid}">BookHotel</a>
	  </div>
	  <p>
	  </div>`;
	const infowindow = new google.maps.InfoWindow({
	  content: contentString,
	});
	const marker = new google.maps.Marker({
	  position: uluru1,
	  map,
	  title: hotname,
	});
  
	marker.addListener("click", () => {
	  infowindow.open({
		anchor: marker,
		map,
		shouldFocus: false,
	  });
	});
}
}
  function hoteldetails(hotel){
	window.location.href = `detail.html?ho=${hotel}`;
}
