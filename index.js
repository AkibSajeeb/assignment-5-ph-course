// Common Shared Function Start
function getInputFieldById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id) {
    const inputValue = document.getElementById(id).innerText;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}
// Common Shared Function End

// Noakhali
document.getElementById('btn-donate').addEventListener('click', function (event) {
    event.preventDefault();
    const addAmount = getInputFieldById('input-add-amount');

    if (addAmount < 0 || isNaN(addAmount)) {
        alert('Failed To Add Money');
    }

    else {
        const balance = getTextFieldValueById('account-balance');
        const mainBalance = getTextFieldValueById('account-main-balance');
        const newBalance = balance + addAmount;
        const newMainBalance = mainBalance - addAmount;
        document.getElementById('account-balance').innerText = newBalance + ' BDT';
        document.getElementById('account-main-balance').innerText = newMainBalance + ' BDT';
    }

})

// Feni
document.getElementById('btn-donate-feni').addEventListener('click', function (event) {
    event.preventDefault();
    const addAmount = getInputFieldById('input-add-amount-feni');

    if (addAmount < 0 || isNaN(addAmount)) {
        alert('Failed To Add Money');
    }

    else {
        const balance = getTextFieldValueById('account-balance-feni');
        const mainBalance = getTextFieldValueById('account-main-balance');
        const newBalance = balance + addAmount;
        const newMainBalance = mainBalance - addAmount;
        document.getElementById('account-balance-feni').innerText = newBalance + ' BDT';
        document.getElementById('account-main-balance').innerText = newMainBalance + ' BDT';
    }

})

// Quota
document.getElementById('btn-donate-quoata').addEventListener('click', function (event) {
    event.preventDefault();
    const addAmount = getInputFieldById('input-add-amount-quoata');

    if (addAmount < 0 || isNaN(addAmount)) {
        alert('Failed To Add Money');
    }

    else {
        const balance = getTextFieldValueById('account-balance-quoata');
        const mainBalance = getTextFieldValueById('account-main-balance');
        const newBalance = balance + addAmount;
        const newMainBalance = mainBalance - addAmount;
        document.getElementById('account-balance-quoata').innerText = newBalance + ' BDT';
        document.getElementById('account-main-balance').innerText = newMainBalance + ' BDT';
    }

})