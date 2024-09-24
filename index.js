// Common Shared Function Start
function getInputFieldById(id){
const inputValue = document.getElementById(id).value;
const inputNumber = parseFloat(inputValue);
return inputNumber;
}

function getElementById(id){
    const inputValue = document.getElementById(id).innerText;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
    }
    
// Common Shared Function End


document.getElementById('btn-donate').addEventListener('click', function(event){
event.preventDefault();
const addAmount = getInputFieldById('input-add-amount');

if(addAmount < 0 || isNaN(addAmount)){
    alert('Failed To Add Money');
}
    
else{
    const balance = getElementById('account-balance');
    const newBalance = balance + addAmount;
    document.getElementById('account-balance').innerText = newBalance + ' BDT';
}

})