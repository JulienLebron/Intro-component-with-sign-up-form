
const email = document.querySelector('.email');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const password = document.querySelector('.password');
const form = document.querySelector('.form');
const emailMessage = document.querySelector('.empty-email-message');
const firstNameMessage = document.querySelector('.empty-first-name-message');
const lastNameMessage = document.querySelector('.empty-last-name-message');
const passwordMessage = document.querySelector('.empty-password-message');
const errorEmail = document.querySelector('.invalid-email-message');

form.addEventListener('submit', e => {
    if(email.value){
        const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
        if (regexMatch) {
            errorEmail.textContent = '';
            emailMessage.textContent = '';
            email.classList.remove("invalid-message");
            email.classList.add("valid-message");
        } else {
            e.preventDefault();
            email.classList.remove("valid-message");
            email.classList.add("invalid-message");
            errorEmail.textContent = 'Looks like this is not an email';
            emailMessage.textContent = "";
        }
    } else {
        e.preventDefault();
        email.classList.remove("valid-message");
        email.classList.add("invalid-message");
        email.placeholder = "";
        emailMessage.textContent = 'Email cannont be empty';
        errorEmail.textContent = "";
    }
    if(!firstName.value){
        e.preventDefault();
        firstName.classList.remove("valid-message");
        firstName.classList.add("invalid-message");
        firstName.placeholder = "";
        firstNameMessage.textContent = "First Name cannot be empty";
    } else {
        e.preventDefault();
        firstNameMessage.textContent = "";
        firstName.classList.remove("invalid-message");
        firstName.classList.add("valid-message");
    }
    
    if(!lastName.value){
        lastName.classList.remove("valid-message");
        lastName.classList.add("invalid-message");
        lastName.placeholder = "";
        lastNameMessage.textContent = "Last Name cannot be empty";
    } else {
        e.preventDefault();
        lastNameMessage.textContent = "";
        lastName.classList.remove("invalid-message");
        lastName.classList.add("valid-message");
    }

    if(!password.value){
        password.classList.add("invalid-message");
        password.placeholder = "";
        passwordMessage.textContent = "Password cannot be empty";
    } else {
        e.preventDefault();
        passwordMessage.textContent = "";
        password.classList.remove("invalid-message");
        password.classList.add("valid-message");
    }
});