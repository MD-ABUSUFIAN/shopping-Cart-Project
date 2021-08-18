
function updateCaseNumber(product,price,isIncresing){
    const caseInput=document.getElementById(product+'-number');
    let caseNumber=parseInt(caseInput.value);
    if (isIncresing==true) {
        caseNumber=caseNumber+1;
        console.log(caseInput.value);
    }
    else if (caseInput.value>0) {
        caseNumber=caseNumber-1;
    }
    caseInput.value=caseNumber;
    const caseTotal=document.getElementById(product+'-total');
    caseTotal.innerText=caseNumber*price;
    calculateTotal()
}

function getInputValue(product) {
    const productInput=document.getElementById(product+'-number');
    const productNumber=parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    
    const phoneTotal=getInputValue("phone")*1219;
    const caseTotal=getInputValue("case")*59;
    const subTotal=phoneTotal+caseTotal;
    const tax=subTotal/10;
    const totalPrice=subTotal+tax;
    
    document.getElementById('total-price').innerText=totalPrice;
    document.getElementById('tax-amount').innerText=tax;
    document.getElementById('sub-total').innerText=subTotal;

}


// phone casing part event handler adding

document.getElementById('case-plus').addEventListener('click',function () {
    updateCaseNumber("case",59,true)
})
document.getElementById('case-minus').addEventListener('click',function () {
    updateCaseNumber("case",59,false)    
})

// phone part event handleing add 

   document.getElementById('phone-plus').addEventListener('click',function(){
    updateCaseNumber("phone",1219,true)
   }) 

   document.getElementById('phone-minus').addEventListener('click',function(){
    updateCaseNumber("phone",1219,false)
   }) 


   document.getElementById('check-out-button').addEventListener('click',function () {
       window.location.href="https:www.youtube.com/watch?v=J1GlXRiIP38&t=1794s";
   })

