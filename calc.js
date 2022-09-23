function calTip(){
    food=parseInt(document.getElementById('amt').value);
    tipPercentage = parseInt(document.getElementById('tip').value)/100;
    tipAmount = food * tipPercentage;
    totalAmt = food + tipAmount;
    document.getElementById('total').value = totalAmt;
}