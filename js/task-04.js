const counterValue = document.querySelector('#value')
const incrementBtn = document.querySelector('button[data-action="increment"]')
const decrementBtn = document.querySelector('button[data-action="decrement"]')

// incrementBtn.addEventListener('click', onIncrementCount)
// decrementBtn.addEventListener('click', onDecrementCount)


// function onIncrementCount (ev) {
//     let count = Number(counterValue.innerHTML)
//     counterValue.innerHTML = count+=1
// }

// function onDecrementCount (ev) {
//     let count = Number(counterValue.innerHTML)
//     counterValue.innerHTML = count-=1
// }

function countClick(el) {
    let counterValue = 0;
    incrementBtn.addEventListener('click', () => {
        counterValue += 1;
        el.textContent = counterValue;
    });
    decrementBtn.addEventListener('click', () => {
        counterValue -= 1;
        el.textContent = counterValue;
    });
}

countClick(counterValue)