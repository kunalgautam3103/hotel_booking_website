
function part2hide(){
   var but= document.getElementById("butn");
   var part=document.getElementById("part2");
    if(but.value==="hide"){
    but.innerHTML="VIEW LESS";
    part.style.display="flex";
    but.value="unhide";
   }
   else{
    but.innerHTML="VIEW MORE";
    part.style.display="none";
    but.value="hide";

   }
}
function redirect(str){

   window.location.href = `list.html?city=${str}`;
   
   }



   window.addEventListener("load", function(){
      
      var name_input = document.getElementById('name_input');
      name_input.addEventListener("keyup", function(event){hinter(event)});
      XHR = new XMLHttpRequest();
  });
  

  function hinter(event) {

     var input = event.target;
     city=input.value;
   
      var huge_list = document.getElementById('huge_list');
  
   
      
  
      if (input.value.length <3) { 
          return;
      } 
      else { 
  
         
          XHR.abort();
  
          XHR.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
  
               
                  var response = JSON.parse( this.responseText ).data; 
  
                  if(input.value.length>=3){
                  huge_list.innerHTML = "";
  

                
                     for(var i=1; i<response.length; i++){


                      

                      var item =response[i].result_object.name
                      var option = document.createElement('option');
                      option.value = item;
  
                      
                      huge_list.appendChild(option);
                      
                  };
               }
              }
          };
          XHR.open("GET", `https://travel-advisor.p.rapidapi.com/locations/auto-complete?query=${city}`);
          XHR.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
          XHR.setRequestHeader("x-rapidapi-key","d699213266msh1848c1d57c9f7dep1211bdjsn5f3c24e2a206");
          
          XHR.send();
          
          

      }
  }
