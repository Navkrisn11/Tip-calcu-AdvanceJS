const tip=document.getElementById("range");
const tit=document.querySelector(".ran");

const tipamt=document.querySelector(".tipamt");
const amt=document.querySelector(".bill");
 var tipc = 0;
tip.addEventListener("input", function(e){
   let inp =document.getElementById("num").value;
   console.log("inp",inp)
   let tipam=e.target.value;

 Rper = tit.textContent =`${tipam}`;
 tipc = (Number(inp) * Number(Rper))/100;
                           
   if(inp == ""){
    alert("Please enter amount");
   }
   else{
        tit.textContent=`${tipam}%`;
        tipamt.textContent=tipc;
   
        amt.textContent=tipCalc(parseFloat(inp),parseFloat(tipam));

   }
})
function tipCalc(amt){
   return tipc + amt;
}