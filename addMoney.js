// console.log('money')
document.getElementById('addMoneyBtn').addEventListener('click',function(){
    // console.log('Button')
    const bankAccount = getValueFromInput('add-money-bank')
    // console.log(bankAccount)
    if(bankAccount =='Select Bank'){
        alert('Select Bank First')
        return
    }

    //get bank account number
    const accountNumber = getValueFromInput('bankAccountNumber')
    console.log(accountNumber)
    if(accountNumber.length !=11 && accountNumber != '12345678901'){
        alert('Enter Correct Number')
        return
    }

    //get amount
    const amountToAdd = getValueFromInput('amountToAdd')
    console.log(amountToAdd)
    balanceNow = getBalance()

    const totalAmount = balanceNow + Number(amountToAdd) ;
    // console.log(typeof(balanceNow), typeof(amountToAdd))
    

    const pin = getValueFromInput('pinBank')
    if(pin == '1234'){
        alert(`Add Money Success from ${bankAccount} at ${new Date()}`)
        setBalance(totalAmount)
    }else{
        alert('Invalid pin')
        return
    }



    
})