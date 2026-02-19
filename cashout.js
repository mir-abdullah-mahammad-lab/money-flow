// const btnWithdraw = document.getElementById('btnWithdrawal')
// btnWithdraw.addEventListener('click', function(){
//     // console.log('working')
//     const agentNumber = document.getElementById('AgentNumber').value
//     console.log(agentNumber.length)
//     if(agentNumber.length !==11 && agentNumber !=='01331798520'){
//         alert('ReEnter agent number')
//         return;
//     }

//     const Amount = document.getElementById('Amount').value
//     console.log(Amount)
 
//     const balanceGet = document.getElementById('balance')
//     const balance = balanceGet.innerText
//     console.log(balance)

//     const balanceAvailable = Number(balance) - Number(Amount)
//     if(balanceAvailable < 0){
//         alert('Amount Exceded')
//         return
//     }
//     console.log(balanceAvailable)

//     const pinDigit = document.getElementById('pinDigit').value
//     console.log(pinDigit)
//     if(pinDigit === '3333'){
//         alert('Cashout Sucessfull')
//         }else{
//             alert('Wrong Pin')
//             return
//         }

//     balanceGet.innerText = balanceAvailable
    
    
// })

const btnWithdraw = document.getElementById('btnWithdrawal')
btnWithdraw.addEventListener('click', function(){
    const cashOutNumber = getValueFromInput('AgentNumber')
    console.log(cashOutNumber)
    if(cashOutNumber.length != 11 && cashOutNumber != Number('01331798520')){
        alert('Invalid Number')
        return
    }

    const cashoutAmount = getValueFromInput('Amount')
    // console.log(cashoutAmount)

    //set balance
    const currentBalance = getBalance()

    const newBalance = currentBalance - Number(cashoutAmount)
    console.log('b',newBalance)
    if(newBalance < 0){
        alert('Invalid Amount')
        return;
    }
    
    const pin = getValueFromInput('pinDigit')
    // console.log(pin)

    if(pin ==='3333'){
        alert('Cashout Successfull')
        setBalance(newBalance)
    }else{
        alert('Invalid Pin')
    }
})