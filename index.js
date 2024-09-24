// Common Shared Functions
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

function showSectionById(id) {
    document.getElementById('donation-form').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

// Donate Now button functionality
// Noakhali
document.getElementById('btn-donate').addEventListener('click', function (event) {
    event.preventDefault();
    const addAmount = getInputFieldById('input-add-amount');

    if (addAmount < 0 || isNaN(addAmount)) {
        alert('Failed To Add Money');
        return;
    }

    else {
        const balance = getTextFieldValueById('account-balance');
        const mainBalance = getTextFieldValueById('account-main-balance');

        if (addAmount > mainBalance) {
            alert('You do not have enough money to Donation');
            return;
        }

        const newBalance = balance + addAmount;
        const newMainBalance = mainBalance - addAmount;
        document.getElementById('account-balance').innerText = newBalance + ' BDT';
        document.getElementById('account-main-balance').innerText = newMainBalance + ' BDT';

        const h2 = document.createElement('h2');
        h2.innerText = `${addAmount} Taka is Donated for famine-2024 at Feni, Bangladesh`;
        const p = document.createElement('p');
        p.innerText = `Date: ` + new Date();
        p.classList.add('font-normal', 'text-textSecondary', 'text-base', 'pt-2');
        document.getElementById('history-container-noakhali').appendChild(h2);
        document.getElementById('history-container-noakhali').appendChild(p);
    }

})
// Feni
document.getElementById('btn-donate-feni').addEventListener('click', function (event) {
    event.preventDefault();
    const addAmount = getInputFieldById('input-add-amount-feni');

    if (addAmount < 0 || isNaN(addAmount)) {
        alert('Failed To Add Money');
        return;
    }

    else {
        const balance = getTextFieldValueById('account-balance-feni');
        const mainBalance = getTextFieldValueById('account-main-balance');

        if (addAmount > mainBalance) {
            alert('You do not have enough money to Donation');
            return;
        }

        const newBalance = balance + addAmount;
        const newMainBalance = mainBalance - addAmount;
        document.getElementById('account-balance-feni').innerText = newBalance + ' BDT';
        document.getElementById('account-main-balance').innerText = newMainBalance + ' BDT';

        const h2 = document.createElement('h2');
        h2.innerText = `${addAmount} Taka is Donated for Flood Relief in Feni, Bangladesh`;
        const p = document.createElement('p');
        p.innerText = `Date: ` + new Date();
        p.classList.add('font-normal', 'text-textSecondary', 'text-base', 'pt-2');
        document.getElementById('history-container-feni').appendChild(h2);
        document.getElementById('history-container-feni').appendChild(p);
    }

})
// Quota
document.getElementById('btn-donate-quoata').addEventListener('click', function (event) {
    event.preventDefault();
    const addAmount = getInputFieldById('input-add-amount-quoata');

    if (addAmount < 0 || isNaN(addAmount)) {
        alert('Failed To Add Money');
        return;
    }

    else {
        const balance = getTextFieldValueById('account-balance-quoata');
        const mainBalance = getTextFieldValueById('account-main-balance');

        if (addAmount > mainBalance) {
            alert('You do not have enough money to Donation');
            return;
        }

        const newBalance = balance + addAmount;
        const newMainBalance = mainBalance - addAmount;
        document.getElementById('account-balance-quoata').innerText = newBalance + ' BDT';
        document.getElementById('account-main-balance').innerText = newMainBalance + ' BDT';

        const h2 = document.createElement('h2');
        h2.innerText = `${addAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
        const p = document.createElement('p');
        p.innerText = `Date: ` + new Date();
        p.classList.add('font-normal', 'text-textSecondary', 'text-base', 'pt-2');
        document.getElementById('history-container-quota').appendChild(h2);
        document.getElementById('history-container-quota').appendChild(p);
    }

})

// Toggle Button
document.getElementById('donation-btn').addEventListener('click', function () {
    showSectionById('donation-form');
})
document.getElementById('history-btn').addEventListener('click', function () {
    showSectionById('history-section');
})

// Button Functionality
const donationTab = document.getElementById('donation-btn');
const historyTab = document.getElementById('history-btn');
historyTab.addEventListener('click', function () {
    historyTab.classList.add('bg-buttonBg', 'text-black', 'font-semibold');
    historyTab.classList.remove('btn-outline');
    donationTab.classList.remove('bg-buttonBg');
    donationTab.classList.add('btn-outline', 'text-textSecondary');

    donationTab.addEventListener('click', function () {
        donationTab.classList.add('bg-buttonBg', 'text-black', 'font-semibold');
        donationTab.classList.remove('btn-outline');
        historyTab.classList.remove('bg-buttonBg');
        historyTab.classList.add('btn-outline', 'text-textSecondary');
    })
})