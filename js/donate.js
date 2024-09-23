
// NOakhali
document.getElementById('donate-Noakhali').addEventListener('click',function(event){
    event.preventDefault();
    const inputFieldValueNoakhali =getInputFieldValueById('input-data-Noakhali'); 
    const donationAmount =getTextFieldValueById('input-data-Noakhali'); 
    
    if(donationAmount === '' || isNaN(donationAmount) || donationAmount <= 0){
        // add to money Noakhali Donation
        const donateNoakhaliNumber =getTextFieldValueById('Money-Noakhali'); 
        const totalDonateNoakhali = inputFieldValueNoakhali+donateNoakhaliNumber; 
        document.getElementById('Money-Noakhali').innerText=totalDonateNoakhali; 
        // current money sub new balance
        const currentMoneyNumber = getTextFieldValueById('current-Balance');
        const newBalance =currentMoneyNumber-inputFieldValueNoakhali;
        document.getElementById('current-Balance').innerText=newBalance;
    } 
    else{
        alert('Not a valid Number for Donation');
    }
});

// Feni
document.getElementById('donate-feni').addEventListener('click',function(event){
    event.preventDefault(); 
    const inputFieldValueFeni =getInputFieldValueById('input-data-Feni');
    const donationAmount=getTextFieldValueById('input-data-Feni');
    if(donationAmount === '' || isNaN(donationAmount) || donationAmount <= 0){
       // add to money Feni Donation
        const donateFeniNumber =getTextFieldValueById('Money-Feni'); 
        const totalDonateFeni = inputFieldValueFeni+donateFeniNumber; 
        document.getElementById('Money-Feni').innerText=totalDonateFeni; 
        // current money sub new balance
        const currentMoneyNumber = getTextFieldValueById('current-Balance');
        const newBalance =currentMoneyNumber-inputFieldValueFeni;
        document.getElementById('current-Balance').innerText=newBalance;
    }
    else{
        alert('Not a valid Number for Donation');
    }
});

// quota
document.getElementById('donate-quota').addEventListener('click',function(event){
    event.preventDefault(); 
    const inputFieldValuequota =getInputFieldValueById('input-data-quota');
    const donationAmount=getTextFieldValueById('input-data-quota');
    if(donationAmount === '' || isNaN(donationAmount) || donationAmount <= 0){
       // add to money Feni Donation
        const donatequotaNumber =getTextFieldValueById('Money-quota'); 
        const totalDonatequota = inputFieldValuequota+donatequotaNumber; 
        document.getElementById('Money-quota').innerText=totalDonatequota; 
        // current money sub new balance
        const currentMoneyNumber = getTextFieldValueById('current-Balance');
        const newBalance =currentMoneyNumber-inputFieldValuequota;
        document.getElementById('current-Balance').innerText=newBalance;
    }
    else{
        alert('Not a valid Number for Donation');
    }
})