const btnWithdraw = document.getElementById('btnWithdrawal')
btnWithdraw.addEventListener('click', function(){
    // console.log('working')
    const agentNumber = document.getElementById('AgentNumber').value
    console.log(agentNumber.length)
    if(agentNumber.length !==11 && agentNumber !=='01331798520'){
        alert('ReEnter agent number')
        return;
    }

    const Amount = document.getElementById('Amount').value
    console.log(Amount)
 
    const balanceGet = document.getElementById('balance')
    const balance = balanceGet.innerText
    console.log(balance)

    const balanceAvailable = Number(balance) - Number(Amount)
    if(balanceAvailable < 0){
        alert('Amount Exceded')
        return
    }
    console.log(balanceAvailable)

    const pinDigit = document.getElementById('pinDigit').value
    console.log(pinDigit)
    if(pinDigit === '3333'){
        alert('Cashout Sucessfull')
        }else{
            alert('Wrong Pin')
            return
        }

    balanceGet.innerText = balanceAvailable
    
    









})