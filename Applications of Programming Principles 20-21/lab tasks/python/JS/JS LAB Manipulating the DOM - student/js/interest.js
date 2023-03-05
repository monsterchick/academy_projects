function calculate()

{

// Get users input from form

var principal = document.getElementById("principal").value;

var rawinterest = document.getElementById("interest").value;

var rawpayments = document.getElementById("years").value;

// Convert interest from percent to a decimal, and annual rate to monthly

var interest = rawinterest / 100 / 12;

var payments = rawpayments * 12;

// Compute monthly payment figure using Javascript math functions

var x = Math.pow( 1 + interest, payments);

var monthly = (principal * x * interest)/(x-1);

// Get named <span> elements from the form
var payment = document.getElementById("payment");
var total = document.getElementById("total");
var totalinterest = document.getElementById("totalinterest");
// Check result is a finite number and display it with 2 decimal places
if (isFinite(monthly))
{
payment.innerHTML = monthly.toFixed(2);
total.innerHTML = (monthly * payments).toFixed(2);
totalinterest.innerHTML = ((monthly * payments)-principal).toFixed(2);
}
else
{

payment.innerHTML = " ";

total.innerHTML = " ";

totalinterest.innerHTML = " ";

}

}