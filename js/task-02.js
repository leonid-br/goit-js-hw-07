const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listEl = document.querySelector('#ingredients')

const getArrItems = ingredients.map(elem => {
        const item = document.createElement('li')
        item.textContent = elem
        return item
    })

listEl.append(...getArrItems)