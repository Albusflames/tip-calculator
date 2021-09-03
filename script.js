const bill = document.getElementById('bill');
const people = document.querySelector('#people');
const button = document.getElementsByClassName('button');
const amount = document.querySelector('#amount');
const tAmount = document.querySelector('#tAmount');
const display = document.getElementsByClassName('display');
const custom = document.querySelector('#custom');
const reset = document.querySelector('#reset');


 function calculate (percentValue) {
    let billValue = bill.value;
    let peopleCount = people.value;
    let percent = percentValue;
    let onePersonTip = ((billValue/peopleCount) * percent).toFixed(2);
    let total = ((billValue/peopleCount) + Number(onePersonTip)).toFixed(2);
    amount.innerHTML = amount.textContent = amount.innerText = '$ ' + onePersonTip; 
    tAmount.textContent = '$ ' + total;
    console.log(total);
    console.log(billValue);
}
people.setCustomValidity("can't be zero or less than 1");
i= 0;
for(i=0; i < button.length; i++) {
    button[i].addEventListener('click', 
    
    function () {
        if(people.value >= 1) {
        butValue= Number(this.value/100);
        calculate(butValue);}
        
        else {
            people.setCustomValidity("can't be zero or less than 1");
        }
    })
}
reset.addEventListener('click', function () {
    bill.value = null;
    people.value = null;
    amount.textContent = '$ 0.00';
    tAmount.textContent = '$ 0.00';
})