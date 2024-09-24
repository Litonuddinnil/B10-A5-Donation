
// Noakhali

document.getElementById('donate-Noakhali').addEventListener('click',function(event){
    event.preventDefault();
   
    const inputFieldValueNoakhali =getInputFieldValueById('input-data-Noakhali'); 
    
    const donationAmount =Number(inputFieldValueNoakhali);  
    
     
    if( donationAmount > 0 && Number.isInteger(donationAmount) ){
          // add to money Noakhali Donation
          const donateNoakhaliNumber =getTextFieldValueById('Money-Noakhali'); 
          const totalDonateNoakhali = inputFieldValueNoakhali+donateNoakhaliNumber; 
          // current money sub new balance
          const currentMoneyNumber = getTextFieldValueById('current-Balance');
          const newBalance =currentMoneyNumber-inputFieldValueNoakhali;
           
          if(newBalance>0){
              
              document.getElementById('Money-Noakhali').innerText=totalDonateNoakhali; 
              document.getElementById('current-Balance').innerText=newBalance;
              // history donation
                const p =document.createElement('p');
                p.innerText =`${inputFieldValueNoakhali} Taka is ${NoakhaliTitle.innerText}
                ${new Date()}`;
                document.getElementById('NoakhaliHistory').appendChild(p);  
                
          }
           
            else{
                alert('Your current balance is low.');
                hiddenMode.classList.add('hidden');
                window.location.reload();
              }
          
         
    } 
    else{
        alert('Not a valid Number for Donation');
        hiddenMode.classList.add('hidden');
        window.location.reload();
    }
});

// Feni
document.getElementById('donate-feni').addEventListener('click',function(event){
    event.preventDefault(); 
    const inputFieldValueFeni =getInputFieldValueById('input-data-Feni');
    const donationAmount= Number(inputFieldValueFeni);
     
    if(donationAmount > 0 && Number.isInteger(donationAmount)){
             // add to money Feni Donation
             const donateFeniNumber =getTextFieldValueById('Money-Feni'); 
            const totalDonateFeni = inputFieldValueFeni+donateFeniNumber; 
            // current money sub new balance 
            const currentMoneyNumber = getTextFieldValueById('current-Balance');
            const newBalance =currentMoneyNumber-inputFieldValueFeni;
            if(newBalance>0){
                 
                 document.getElementById('Money-Feni').innerText=totalDonateFeni; 
                 document.getElementById('current-Balance').innerText=newBalance;
            } 
          else{
            alert('Your current balance is low.');
            hiddenMode.classList.add('hidden');
            window.location.reload();
          }
        // donate feni history
        const p =document.createElement('p');
        p.innerText =`${inputFieldValueFeni} Taka is ${ feniTitle.innerText}
         ${new Date()}`;
        document.getElementById('FeniHistory').appendChild(p);
    }
    else{
        alert('Not a valid Number for Donation');
        hiddenMode.classList.add('hidden');
        window.location.reload();
    }
});

// quota
document.getElementById('donate-quota').addEventListener('click',function(event){
    event.preventDefault(); 
    const inputFieldValuequota =getInputFieldValueById('input-data-quota');
    const donationAmount= Number(inputFieldValuequota);
 
    if(donationAmount > 0 && Number.isInteger(donationAmount)){
       // add to money Feni Donation
        const donatequotaNumber =getTextFieldValueById('Money-quota'); 
        const totalDonatequota = inputFieldValuequota+donatequotaNumber; 
        // current money sub new balance
        const currentMoneyNumber = getTextFieldValueById('current-Balance');
        const newBalance =currentMoneyNumber-inputFieldValuequota;
        if(newBalance>0){
            
            document.getElementById('Money-quota').innerText=totalDonatequota; 
            document.getElementById('current-Balance').innerText=newBalance;
        }
        else{
            alert('Your current balance is low.');
            hiddenMode.classList.add('hidden');
            window.location.reload();
          }
        // quota donation history
          const p =document.createElement('p');
        p.innerText =`${inputFieldValuequota} Taka is ${quotaTitle.innerText}
         ${new Date()}`;
        document.getElementById('quotaHistory').appendChild(p);
    }
    else{
        alert('Not a valid Number for Donation');
        hiddenMode.classList.add('hidden');
        window.location.reload();
    }
}) 
