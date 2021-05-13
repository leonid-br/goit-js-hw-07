const input = document.querySelector('#validation-input')

input.addEventListener('focus', onInputFocus);
input.addEventListener('blur', onInputBlur);

function onInputFocus(ev) {
    input.classList.remove('invalid')
    input.classList.remove('valid')
    
}

function onInputBlur(ev) {
    ev.currentTarget.value.length !== Number(ev.currentTarget.dataset.length) ?
    input.classList.add('invalid'):
    input.classList.add('valid')
}


