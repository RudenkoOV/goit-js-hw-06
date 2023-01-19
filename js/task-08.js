const formEls = document.querySelector('.login-form');
console.log(formEls);
formEls.addEventListener('submit', checkForm);

function checkForm(event) {
    event.preventDefault();
    const elements = event.currentTarget;

  if (elements.email.value === "" || elements.password.value === "") {
    return alert("Пустое поле email или password");
  }
      const refs = {
          email: elements.email.value,
          password: elements.password.value
  }
    event.currentTarget.reset();
    return console.log(refs);
    
}
