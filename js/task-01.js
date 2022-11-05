const categoriesEl = document.querySelector('#categories').children.length;
console.log(`Number of categories: ${categoriesEl}`);

const itemsEl = document.querySelectorAll('.item');
itemsEl.forEach(item => {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.lastElementChild.children.length);
});
