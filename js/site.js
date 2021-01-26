document.getElementById("btnCalc").addEventListener("click", buildSchedule);
// document.getElementById("scheduleTable").style.visibility = "visible";

//calculate loan payment
function calcPayment(amount, rate, term){
    return (amount * rate) / (1 - Math.pow(1 + rate, -term));
  }

  //calculate interest for current balance
function calcInterest(balance, rate){
    return balance * rate;
}

//following is for the table
function buildSchedule(){

  // document.getElementById("scheduleTable").style.visibility = "visible";

  let amount = document.getElementById("loanAmount").value;
  let rate = document.getElementById("loanRate").value;
  let term = document.getElementById("loanTerm").value;

  rate = rate / 1200;

// set up some variables that hold values in the schedule
let payment = calcPayment(amount, rate, term);
let balance = amount;
let totalInterest = 0;
let monthlyPrincipal = 0;
let monthlyInterest = 0;
let monthlyTotalInterest = 0;


// write the results to our table
let scheduleBody = document.getElementById("scheduleBody");
let scheduleRow ="";
// reset the table
scheduleBody.innerHTML = "";

for (month = 1; month <= term; month++){

    monthlyInterest = calcInterest(balance, rate);
    totalInterest += monthlyInterest;
    monthlyPrincipal = payment - monthlyInterest;
    balance = balance - monthlyPrincipal;
    
   //  write these values to the table
   scheduleRow = `<tr><td>${month}</td>
   <td>${payment.toFixed(2)}</td>
   <td>${monthlyPrincipal.toFixed(2)}</td>
   <td>${monthlyInterest.toFixed(2)}</td>
   <td>${totalInterest.toFixed(2)}</td>
   <td>${balance.toFixed(2)}</td></tr>`;

   scheduleBody.innerHTML += scheduleRow;
}

document.getElementById("payment").innerHTML = Number(payment).toLocaleString("en-Us", {
     style: "currency",
     currency: "USD",
});

document.getElementById("totalPrincipal").innerHTML = Number(amount).toLocalString("en-US", {
    style: "currency",
    currency: "USD",
  });

   document.getElementById("totalInterest").innerHTML = Number(totalInterest).toLocalString("en-US", {
       style: "currency",
       currency: "USD",
     });
     
     let totalCost = Number(amount) + totalInterest;

     document.getElementById("totalCost").innerHTML = Number(totalCost).toLocalString("en-US", {
         style: "currency",
         currency: "USD",
       });
}

    //  TABLE
// Months    = the term input
// Payment   = "monthlyPmt"(q)
// Principal = "monthlyPmt"(q) - interest payment(below)
// Interest  =  previous remaining balance * rate/1200  LOOP...
// Total Int = current month's interest plus previous months  LOOP...
// Balance   = previous remaining balance - principal pmt


// the original "previous balance" is always the loan e.g.25,000 (like 1st bld in SunsetHills
//   ..so start loop at 1) Need to include the last value, so <= the length instead of <
// need to set "remaining balance" and "prev remaining balance" for Interest and Balance
// need to set Int Pmt as "int" and Prin Pmt as "prin"
// total interest LOOP
// Column 1 is months
//   document.getElementById("months").innerHTML = term; ??? needs to loop
// Column 2 is
//   document.getElementById("pmt").innerHTML = `$${q.toFixed(2)}`;
// Column 3 is
// document.getElementById("prin").innerHTML = `$${(q - (prevBal * rate/1200)).toFixed(2)};`
// Columnn 4 is
// document.getElementById("int").innerHTML = `$${(prevBal * rate/1200).toFixed(2)}`;
// Column 5 is
// document.getElementById("totInt").innerHTML = `$${(totalInt).toFixed(2)}`;
// Column 6 is
// document.getElementById("balance").innerHTML = `$${(prevBal - pmtPrinTotal).toFixed(2)};
// start remaining/previous balance as the full loan



// remaining months remember to start at 1 not 0 and include last month <=
// set prevBal first since the others incorporate...same w/ interest before prin

//   document.getElementById("months").innerHTML = month;
//  document.getElementById("pmt").innerHTML = `$${q.toFixed(2)}`;
//  document.getElementById("prin").innerHTML = `$${pmtPrin.toFixed(2)}`;
//  document.getElementById("int").innerHTML = `$${pmtInt.toFixed(2)}`;
//  document.getElementById("totInt").innerHTML = `$${totInt.toFixed(2)}`;
//  document.getElementById("balance").innerHTML = `$${balance.toFixed(2)}`;