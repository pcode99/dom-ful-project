
const validPin =2255;
const pin = parseInt(validPin);

document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault();
    const bankName = document.getElementById('bank-name').value
    const AccountNumber = document.getElementById('bank-account-num').value;
    const amount = parseInt(document.getElementById('add-amount').value)

    const pinNumber = document.getElementById('pin-number').value
    // console.log(bankName,AccountNumber,amount, pinNumber);

    

    const nowBlamce = parseInt(document.getElementById('avilable-blance').innerText)

        if(AccountNumber.length<9){
            alert('Please provide Valide Phone number ')
            return;
        }

        if(pinNumber != validPin){
            alert('Please provide valide pin')
            return;
        }
    const totalNewAvilableBlance = amount+ nowBlamce;
    const blanceFix = document.getElementById('avilable-blance').innerText = totalNewAvilableBlance;
    

})