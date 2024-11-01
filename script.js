const form = document.getElementById('form');
const input = document.getElementById('mail');
const submit = document.getElementById('submit-btn');
const error = document.getElementById('error-msg');
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const success = document.querySelector('.desc');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    let IsformValid = true;
    error.style.display = 'none';

    if(!input.value){
        error.textContent = "Please enter the email";
        error.style.display = 'block';
        IsformValid = false;
    }
    
    if(!emailPattern.test(input.value)){
        error.style.display = 'block';
        IsformValid = false
    } 

    if(IsformValid){
        success.textContent = "Registered Successfully!"
        success.style.color = 'green';
        success.style.fontWeight = '600';
    } else{
        success.textContent = "Subscribe and get notified";
        success.style.color = 'hsl(209, 33%, 12%)';
        success.style.fontWeight = '300';
    }


})