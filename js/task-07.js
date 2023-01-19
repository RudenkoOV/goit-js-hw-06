const inputForm = document.querySelector('#font-size-control');
const textEl = document.getElementById("text");
console.log(inputForm);
inputForm.addEventListener('input', getTextSize);

function getTextSize(event) {
    console.log(`${ event.currentTarget.value }`);
    textEl.style.fontSize = `${event.target.value}px`;
}

