document.getElementById("btnCalculate").addEventListener("click", calculate);

function calculate(){
    let loan = parseInt(document.getElementById("loan").value);
    let term = parseInt(document.getElementById("term").value);
    let rate = parseInt(document.getElementById("rate").value);
// get monthly pmt calculations
//  "monthlyPmt = loan * (rate/1200) / Math.pow(x,y)
// var x = 1 - (1 + (1 + rate/1200))
// var y = -term
   var x = (1 + rate/1200)
   var y = -term
   var z = loan*(rate/1200)
   var l = 1 - Math.pow(x,y)
   var q = z / l
// need to work on getting it in dollars, decimal 
document.getElementById("monthlyPmt").innerHTML = q;
document.getElementById("totalPrin").innerHTML = loan;
// will need to wait to get "totalInt"
// document.getElementById("totalInt").innerHTML = z * term; 
// document.getElementById("totalCost").innerHTML = loan + z;

    //  TABLE
// Months    = the term input
// Payment   = "monthlyPmt"(q)
// Principal = "monthlyPmt"(q) - interest payment(below)
// Interest  =  previous remaining balance * rate/1200  LOOP...
// Total Int = current month's interest plus previous months  LOOP...
// Balance   = previous remaining balance - principal pmt






}

