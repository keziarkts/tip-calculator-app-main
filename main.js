// CALCULATOR:
let form = document.forms.calculator;

form.bill.oninput = calculate;
form.tips.onchange = calculate;
form.people.oninput = calculate;

var billValue = document.getElementById("bill"); 
var customValue = document.getElementById("custom-tip");
var nbOfPeopleValue = document.getElementById("nb-people");
var resultTipAmount = document.getElementById("result-tip-amount");
var resultTotal = document.getElementById("result-total");

var tipCurrentValue;

function getTipValue(element) {
  tipCurrentValue = element.value;
  console.log(tipCurrentValue);
  calculate();
}

function calculate() {
  let initial = +form.bill.value;
  if (!initial) return;

  let people = +form.people.value;
  if (!people) return;

  var showTipCurrentValue = tipCurrentValue;

  var billValueRound = Math.round((billValue.value)*100) / 100;
  var billValueTip = Math.round((billValue.value*showTipCurrentValue)*100) / 100;
    
  resultTipAmount = billValueTip/nbOfPeopleValue.value;
  var resultTipAmountRound = Math.trunc(resultTipAmount*100) / 100;
    
  var sumBillsTip = billValueRound + billValueTip;
  resultTotal = sumBillsTip/nbOfPeopleValue.value;
  var resultTotalRound = Math.trunc(resultTotal*100) / 100;

  document.getElementById('result-tip-amount').innerHTML = '$'+ resultTipAmountRound ;
  document.getElementById('result-total').innerHTML = '$'+ resultTotalRound;
}

calculate();

// Change text color FOR INPUTS (left column): 
const colors  = document.querySelectorAll('.input-text');

for (let color of colors) {
  color.addEventListener('keyup', () => {
    if (this.event.target.value > 0) {
      this.event.target.style.color = '#00494D';
    }
    else {
      this.event.target.style.color = '#7F9C9F';
    }
  })
}


// Enable/disable the RESET BUTTON when results are out (right column):
var resetButton = document.getElementById("btnReset");
resetButton.addEventListener("click", reset);

function reset() {
  document.getElementById("result-tip-amount").innerHTML = "$0.00";
  document.getElementById("result-total").innerHTML = "$0.00";
  resetButton.style.backgroundColor = ''; /*put the initial color*/
}

// Change background color for reset button if all inputs are complete:
var valNbPeople = document.getElementById("nb-people");
var valBill = document.getElementById("bill");

valNbPeople.addEventListener('change', updateBgReset);
bill.addEventListener('change', updateBgReset);

function updateBgReset() {
  resetButton.style.backgroundColor = '#26C0AB';
}


// User can change the custom tip value:
const newCustomTip = document.getElementById('tip-custom'); 
newCustomTip.addEventListener("click", writeNewValue);  

function writeNewValue() {
  newCustomTip.value = document.getElementById("tip-custom").value;
  document.getElementById("tip-custom").innerHTML = newCustomTip.value;
}

function clearInput(target){
  if (target.value== 'Custom'){
      target.value= "";
 }
}


