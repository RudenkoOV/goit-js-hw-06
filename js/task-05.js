const refs = {
    textEl: document.getElementById('name-input'),
    nameEl: document.getElementById('name-output')
}
refs.textEl.addEventListener('input', changeName);
function changeName(event) {
    if (event.currentTarget.value != '') {
        refs.nameEl.textContent = event.currentTarget.value;
    }
    else refs.nameEl.textContent = "Anonymous";
}