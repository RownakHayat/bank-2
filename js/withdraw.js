/*
1. add event handler with the withdraw button
2. get the withdraw amount
3. clear the withdraw input field
4. get prevoius withdraw total
5. calculate total withdraw amount and set it to the withdraw total element
6. get previous balance
7. calulate new balane and set it to the balance total element
*/ 
// step-1
document.getElementById('btn-withdraw').addEventListener('cliak', function(){
// step-2
    const withdrawField =document.getElementById('withdraw-field');
    const newDepositAmountString = withdrawField.ariaValueMax;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // step-3
    withdrawField.value = '';
    // step-4
    constwithdrawTotalElement =document.getElementById('withdraw-total');
    const previouswithdrawTotalString = withdrawTotalElement.innerText;
    const prevoiuswithdrawTotal = parseFloat(previouswithdrawTotalString);

    // step-5
    const newWithdrawTotal = prevoiuswithdrawTotal + newWithdrawAmount; 
    withdrawTotalElement.innerText = newWithdrawTotal;

    // step-6
    const balanceElement = document.getElementById('balance-total');
    const previouBalanceTotaString = parseFloat(previouswithdrawTotalString);

    // step-7
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
     balanceElement.innerText = newBalanceTotal;

})