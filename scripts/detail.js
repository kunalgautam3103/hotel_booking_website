function f12(){
    
    let from=document.getElementById("fromDate");
    let to=document.getElementById("toDate");
    let date1 = from.value;
    let date2 = to.value;
    var d1=new Date(date1);
    var d2=new Date(date2);
console.log(typeof date1);
var Difference_In_Time = d2.getTime()- d1.getTime()  ;
  
var Diff = Difference_In_Time / (1000 * 3600 * 24);
var count=document.getElementById("adult").value;
var total=count*Diff*1000;
var refprice=document.getElementById("price");
refprice.removeAttribute("readonly");
refprice.value=total;

refprice.innerText=total;



  


}
function myFunction() {
    
    var date1=document.getElementById("fromDate").value;
    var date2=document.getElementById("toDate");
    date2.setAttribute("min",date1);
    console.log(date1);
    }
