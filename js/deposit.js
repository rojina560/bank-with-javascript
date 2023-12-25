
document.getElementById("btn-deposit").addEventListener('click', function () {
    const depositField = document.getElementById("deposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
   
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = newDepositAmount + previousDepositTotal;
      depositTotalElement.innerText = currentDepositTotal;
    depositField.value= ''
    const balanceTotal = document.getElementById("balance-total");
    const totalBalaceAmoutString = balanceTotal.innerText;
    const totalBalaceAmout = parseFloat(totalBalaceAmoutString);
 
    const currentBalace = totalBalaceAmout + newDepositAmount;
    balanceTotal.innerText =currentBalace

  
  

  
});