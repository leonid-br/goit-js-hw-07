const fontSize = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

fontSize.addEventListener('input', onChangeTextSize);

function onChangeTextSize(ev) {
    textSize.style.fontSize = `${ev.currentTarget.value}px`;
}

