// console.log('Machine added')

function getValueFromInput(id){
    const input =document.getElementById(id)
    const value = input.value
    // console.log(value, id)
    return value
}

function getBalance(){
    const balanceElement = document.getElementById('balance')
    const balance = balanceElement.innerText
    // console.log(balance)
    
    return Number(balance)
}

function setBalance(value){
    const balanceElement = document.getElementById('balance')
    balanceElement.innerText = value
    

}