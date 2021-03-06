const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('#gallery')

// const makeGalery = els => {
//     return els.map(el => {
//         const itemEl=document.createElement('li')
//         const imgEl = document.createElement('img');
//         imgEl.src = el.url;  
//         imgEl.alt = el.alt;
//         itemEl.appendChild(imgEl)
//         return itemEl
// })
// }

// const elem = makeGalery(images)
// listEl.append(...elem)

const makeGalery = ({url, alt}) => {
    return `
    <li>
        <img src= ${url} alt=${alt}> 
    </li>
    `
}

const tmp = images.map(makeGalery).join('')

listEl.insertAdjacentHTML('afterbegin', tmp)