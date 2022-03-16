const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isPasswordsMatch = false;
let isValid = false;



// applying red to bad forms
function messageBoxColorRed(){
    messageContainer.style.borderColor = 'red';
    message.style.color = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
}
//applying green to succecfull forms
function messageBoxColorGreen(){
    messageContainer.style.borderColor = 'green';
    message.style.color = 'green';
    message.textContent = "Registered succecfully";    
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
}


function comparePasswords(){
    return isPasswordsMatch = password1El.value === password2El.value;
}

function validateForm(){
    isValid = form.checkValidity();

    if(!isValid){
        message.textContent = 'Please fill out all fields';
        messageBoxColorRed();
        return;
    }
    if(!comparePasswords()){
        messageBoxColorRed();
        message.textContent = "The Passwords Don't Match"; 
        return;
    } else {
        messageBoxColorGreen()
    }
}

function storeFormData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password1.value,
    };
    console.log(user);
}

function proccesFormData(event){
    event.preventDefault();
    validateForm();
    if(isPasswordsMatch && isValid){
        storeFormData();
    }

}
form.addEventListener('submit', proccesFormData);
