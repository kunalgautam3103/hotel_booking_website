
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