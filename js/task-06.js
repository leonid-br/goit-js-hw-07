const input = document.querySelector('#validation-input')

input.addEventListener('blur', onInputBlur);

function onInputBlur(ev) {

    if (ev.currentTarget.value.length !== Number(ev.currentTarget.dataset.length)) {
        input.classList.add('.invalid')
    } else {
        document.input.classList.add('.valid')
    }
}

