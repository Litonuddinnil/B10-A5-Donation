 
document.getElementById('btnHistory').addEventListener('click',function(){
     
    noakhaliSection.classList.add('hidden');
    feniSection.classList.add('hidden');
    quotaSection.classList.add('hidden');
    btnHistory.classList.add('bg-btnColor');
    btnDonation.classList.remove('bg-btnColor'); 

        
    historyItems.classList.add('hidden'); 
    historyItems.classList.remove('hidden'); 
});
document.getElementById('btnDonation').addEventListener('click',function(){
    noakhaliSection.classList.remove('hidden');
    feniSection.classList.remove('hidden');
    quotaSection.classList.remove('hidden');
    btnDonation.classList.add('bg-btnColor');
    btnHistory.classList.remove('bg-btnColor'); 

    historyItems.classList.add('hidden');  
   


});
 