// console.log('okayyydoneee')
const btnLogin = document.getElementById('btnLogin')
btnLogin.addEventListener('click', function(){
    // console.log('okay clicked')
    const mobileNumber = document.getElementById('mobileNumber').value 
    console.log(mobileNumber)

    const fourDigitNumber = document.getElementById('fourDigitNumber').value
    console.log(fourDigitNumber)
   

    // match pin and mobile number
    if(mobileNumber=='01331798520' && fourDigitNumber=='3333'){
    //  alert('Login Sucess')
    //  window.location.replace('/home.html')
    window.location.assign('/home.html')
    }else{
        alert('Login Fail!!')
    }
     return

})