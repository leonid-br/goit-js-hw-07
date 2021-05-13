const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients')

const getArrItems = elements => {
    return elements.map(element => {
        const itemEl = document.createElement('li')
        itemEl.textContent = element
        return itemEl
    })
}

const arrayItems = getArrItems(ingredients)

listEl.append(...arrayItems)