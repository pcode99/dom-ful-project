// login button functionality 

document.getElementById('loginButton').addEventListener('click', function(e){
    e.preventDefault();
   const mobileNumber = 123456789;
   const pinCode =2222;
    const mobileInput = document.getElementById("mobile_input").value;
    

    const mobileNimberConverted = parseint(mobileInput);
    console.log(mobileNimberConverted);

    const pinInput = document.getElementById('Pin').value;
    const pinConverted = parseint(pinInput);
    console.log(pinConverted + mobileNimberConverted


    );
});
