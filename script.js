var purchaseprice = document.querySelector(".purchase");

var stockqty = document.querySelector(".stock");

var currprice = document.querySelector(".current");

var btnref = document.querySelector(".btn");

var out = document.querySelector("#output");

btnref.addEventListener("click",myfunc);


function myfunc()
{
   var purperunit = purchaseprice.value;
   var qty = stockqty.value;
   var newprice = currprice.value;
   var invested = purperunit*qty;
   var returns = newprice*qty;
   console.log(invested);
   console.log(returns);

   if(returns>invested){
       var profitinRs = (returns-invested);
       var profitper = (profitinRs/invested)*100;
       out.style.color = "green";
       out.innerText = "You have a total profit of "+ profitper + "%";

   }
   else if(invested>returns){
       var lossinRs = (invested-returns);
       var lossper = (lossinRs/invested)*100;
       out.style.color = "red";
       out.innerText = "Ohh No !! You have a loss of "+lossper + "%";

   }
   else{
       out.innerText = "No profit No loss"
   }
   }








