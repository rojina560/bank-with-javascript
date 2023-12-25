

document.getElementById("withdrow-btn").addEventListener('click', function () {
    const withdrawField = document.getElementById("withdraw-field");
    const withdrawTotaString = withdrawField.value;
    const withdrawTotal = parseFloat(withdrawTotaString);
   

    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const totalWithdrawAmount = parseFloat(previousWithdrawTotalString)
    const currentWithdraw = withdrawTotal + totalWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdraw;
    withdrawField.value = "";
    const balanceTotalElement = document.getElementById('balance-total');
    const balaceTotalString = balanceTotalElement.innerText;
    const totalBalanceAmonut = parseFloat(balaceTotalString)
    const totalBalance = totalBalanceAmonut - withdrawTotal
    balanceTotalElement.innerText=totalBalance

    

      

    

   
});