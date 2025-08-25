
const validPin =2255;
const pin = parseInt(validPin);

document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault();
    const bankName = document.getElementById('bank-name').value
    const AccountNumber = document.getElementById('bank-account-num').value;
    const amount = parseInt(document.getElementById('add-amount').value)
    const pinNumber = document.getElementById('pin-number').value
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

//fast add mooney button function hear 

document.getElementById('add-money-box').addEventListener('click', function(){
    document.getElementById('cash-in-form-id').style.display='block'
    document.getElementById('cash-out-form-id').style.display='none'
    document.getElementById('add-money-box').style.backgroundColor='#DDF4E7'
    document.getElementById('cash-out-box-id').style.backgroundColor='#ffffff'
})

// second cash out button funnction hear 

document.getElementById('cash-out-box-id').addEventListener('click', function(){
    document.getElementById('cash-in-form-id').style.display='none'
    document.getElementById('cash-out-form-id').style.display='block'
    document.getElementById('cash-out-box-id').style.backgroundColor='#DDF4E7'
        document.getElementById('add-money-box').style.backgroundColor='#ffffff'

})




document.getElementById('cash-out-btn').addEventListener('click', function(e){
e.preventDefault();
const agentNumber = parseInt(document.getElementById('agent-number').value);
const outAmmount =parseInt( document.getElementById('out-ammount').value);
const cashOutPin =document.getElementById('cash-out-pin').value;

  if(agentNumber.length<9){
            alert('Please provide Valide Phone number ')
            return;}
            
if (cashOutPin!=pin){
    alert('Please Provide Valid Pin ')
    return;
}

const nowBlamce = parseInt(document.getElementById('avilable-blance').innerText)
const totaalNewBlance = nowBlamce-outAmmount;
document.getElementById('avilable-blance').innerText=totaalNewBlance;



})
