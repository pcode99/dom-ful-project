// login button functionality ;
// This  part is login button functionality ;


const logIn = document.getElementById('log-in').addEventListener('click', function(e){
    e.preventDefault();
    const mobileNumber =123456789;
    const PinNumber = 2255;

    // this is input  file 

    const mobileNumberValue = document.getElementById('mobile-number-id').value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);


    const pinNumberValue = document.getElementById('pin-number-id').value;
     const pinNumberValueConverted = parseInt(pinNumberValue);
     console.log(mobileNumberValueConverted , pinNumberValueConverted);



    //  this is logic 
    if ( mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === PinNumber ){
        window.location.href="main.html"
    }else{
        alert('Invalid Pin or pass');
    }

   

})