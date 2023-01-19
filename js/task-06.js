const inputForm = document.getElementById('validation-input');
console.log(inputForm);
inputForm.addEventListener('blur', chekInput);
function chekInput(event) {
    console.log(event.target.value.length);
    console.log(Number(inputForm.dataset.length));
    if (event.target.value.length === Number(inputForm.dataset.length)) {
        inputForm.classList.add('invalid');
        inputForm.classList.replace('invalid', 'valid');
        
    } else {
        inputForm.classList.add('valid');
        inputForm.classList.replace('valid', 'invalid');
    }
}