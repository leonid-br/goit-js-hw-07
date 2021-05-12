const selectedById = document.querySelector('#categories');
console.log(`В списке ${selectedById.children.length} категории`);

const menuItem = document.querySelectorAll('.item');
function findItem() {
    menuItem.forEach(elem =>
        console.log(`${elem.children[0].textContent}: ${elem.children[1].children.length}`)
    )}
findItem()