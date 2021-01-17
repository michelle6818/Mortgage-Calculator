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
document.getElementById("monthlyPmt").innerHTML = `$${q.toFixed(2)}`;
document.getElementById("totalPrin").innerHTML = `$${loan.toFixed(2)}`;
// will need to wait to get "totalInt"
// document.getElementById("totalInt").innerHTML = `$${(z * term).toFixed(2)}`; 
document.getElementById("totalCost").innerHTML = `$${(loan + z).toFixed(2)}`;

    //  TABLE
// Months    = the term input
// the original "remaining balance" is always 25,000 (like 1st bld in SunsetHills
//   ..so start loop at 1) Need to include the last value, so <= the length instead of <
// need to set "previous remaining balance" for Interest and Balance
// need to set Int Pmt as "int" and Prin Pmt as "prin"
// total interest LOOP
// Column 1 is months
//   document.getElementById("months").innerHTML = term; 
// Column 2 is
  document.getElementById("pmt").innerHTML = `$${q.toFixed(2)}`;
// Column 3 is
//   

var monthsOutput  = term[0];
var remainBal = "";
var pmtPrin = "";
var pmtInt = "";

for (i = 1; i <= term.length; i++){
    monthsOutput += term[i];
}
   monthsOutput.innerHTML = `${i}`;
// document.getElementById("months").innerHTML = months;


// Payment   = "monthlyPmt"(q)
// Principal = "monthlyPmt"(q) - interest payment(below)
// Interest  =  previous remaining balance * rate/1200  LOOP...
// Total Int = current month's interest plus previous months  LOOP...
// Balance   = previous remaining balance - principal pmt






}

