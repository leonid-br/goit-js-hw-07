const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', onInputChange);

function onInputChange(ev) {
    ev.currentTarget.value === ''?
    refs.nameOutput.textContent = 'незнакомец':
    refs.nameOutput.textContent = ev.currentTarget.value;
}