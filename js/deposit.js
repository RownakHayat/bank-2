/*
1. add event listener to the deposit button
2. get deposit amount from the deposit input field
2.5- convert string deposit amount  to a number type
3. cler the deposit input field after getting the value
4. get the previous deposit total
5. calculate new deposit total and set value to the deposit total
.6 get current balance total
7. calculatee the balance and set it to the balanec total element

*/ 
// step-1
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // step-3 
    depositField.value = '';
    // step-4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;
    // step-6.
    const balanceTotalEleemnt = document.getElementById('balance-total');
    const previouBalanceTotalAmount = parseFloat(previousBalanceTotalString);
    //  step-7
    const newBalanceTotal = previouBalanceTotalAmount + newDepositAmount;
    balanceTotalEleemnt.innerText = newBalanceTotal;
    

})
