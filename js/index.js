var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function getNumber1 () {
return Number(input1.value);   
}

function getNumber2 () {
return Number(input2.value);
}

function makeOperation(operationCode) {
    if (operationCode === '+') {
        var result = getNumber1 () + getNumber2 ();
    } else if (operationCode === '-') {
        var result = getNumber1 () - getNumber2 ();
    } else if (operationCode === '*') {
        var result = getNumber1 () * getNumber2 ();
    } else if (operationCode === '/') {
        var result = getNumber1 () / getNumber2 ();
    }
    // else if var result = getNumber1 () * getNumber2 ();
    // else if  var result = getNumber1 () / getNumber2 ();

    window.alert(result);
}
function onButtonPlusClick() {
    makeOperation ('+');
}
//     var result = getNumber1 () + getNumber2 ();
//     window.alert(result);
function onButtonMinusClick() {
    makeOperation ('-');
}
//     var result = getNumber1 () - getNumber2 ();
//     window.alert(result);
function onButtonMultiplyClick() {
    makeOperation ('*');
}
//     var result = getNumber1 () * getNumber2 ();
//     window.alert(result);
function onButtonDevideClick() {
    makeOperation ('/');
}
//     var result = getNumber1 () / getNumber2 ();
//     window.alert(result);

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click', onButtonMultiplyClick);
buttonDevide.addEventListener('click', onButtonDevideClick);