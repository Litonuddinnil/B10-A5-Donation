 
document.getElementById('btnHistory').addEventListener('click',function(){
     
    noakhaliSection.classList.add('hidden');
    feniSection.classList.add('hidden');
    quotaSection.classList.add('hidden');
    btnHistory.classList.add('bg-btnColor');
    btnDonation.classList.remove('bg-btnColor'); 

        
    NoakhaliHistory.classList.add('hidden','border','border-dashed','rounded-xl','p-8','text-2xl','my-3'); 
    NoakhaliHistory.classList.remove('hidden');
    FeniHistory.classList.add('hidden','border','border-dashed','rounded-xl','p-8','text-2xl','my-3');
    FeniHistory.classList.remove('hidden');
    quotaHistory.classList.add('hidden','border','border-dashed','rounded-xl','p-8','text-2xl','my-3');
    quotaHistory.classList.remove('hidden');
    
        
});
document.getElementById('btnDonation').addEventListener('click',function(){
    noakhaliSection.classList.remove('hidden');
    feniSection.classList.remove('hidden');
    quotaSection.classList.remove('hidden');
    btnDonation.classList.add('bg-btnColor');
    btnHistory.classList.remove('bg-btnColor'); 

    NoakhaliHistory.classList.add('hidden');  
    FeniHistory.classList.add('hidden');
    quotaHistory.classList.add('hidden');


});
 