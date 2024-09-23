//  function selectBtn(event){
//     event.classList.add('hidden');
//  }
document.getElementById('btnHistory').addEventListener('click',function(){
     
    noakhaliSection.classList.add('hidden');
    feniSection.classList.add('hidden');
    quotaSection.classList.add('hidden');
    btnHistory.classList.add('bg-btnColor');
    btnDonation.classList.remove('bg-btnColor');
        
})
document.getElementById('btnDonation').addEventListener('click',function(){
    noakhaliSection.classList.remove('hidden');
    feniSection.classList.remove('hidden');
    quotaSection.classList.remove('hidden');
    btnDonation.classList.add('bg-btnColor');
    btnHistory.classList.remove('bg-btnColor');
})