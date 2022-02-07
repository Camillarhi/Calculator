//UI element
const numBtn = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operator');
const clear = document.getElementById('clear');
const sum = document.querySelector('.sum');
const input = document.getElementById('display');
const decimal = document.getElementById('decimal');
const sqrt = document.getElementById('sqrt');





//LOAD EVENT LISTENERS

loadEventListeners();

function loadEventListeners() {
 
//clear display
clear.addEventListener('click', noValues);

//SUM VALUES
sum.addEventListener('click', calcNum)

//DECIMAL POINT
 decimal.addEventListener('click', showDec)

//SQUARE ROOT
sqrt.addEventListener('click', squareRoot)



}

 



// DISPLAY VALUE
input.value='0';



//CLEAR VALUES
function noValues(e){
   input.value='0'
 
}

//SUAREROOT EVENT
function squareRoot(e) {
  input.value=Math.sqrt(input.value)
}



//DISPLAY NUMBERS
numBtn.forEach(function (numBtn){
  numBtn.addEventListener('click', displayNum)  
});

//DISPLAY EVENTS
function displayNum(e) {
  
  if (input.value === '0') {
    input.value = e.target.value
  } else {
    input.value += e.target.value
  }
    
}

//SHOW DECIMAL
function showDec(e) {
  input.value = input.value + '.'
  
}


//OPERATOR EVENT
operators.forEach(function (operators){
  operators.addEventListener('click', displayOperator)  
});



//DISPLAY EVENTS
function displayOperator(e) {
  
input.value +=e.target.value
}



//SUM EVENT
function calcNum(e) {
  input.value = eval(input.value);
}