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
   var z = loan * (rate/1200)
   var l = 1 - Math.pow(x,y)
   var q = z / l
   
document.getElementById("monthlyPmt").innerHTML = q;

}