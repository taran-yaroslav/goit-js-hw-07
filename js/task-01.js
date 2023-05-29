const ulCategories = document.querySelector('#categories');

const ulChildren = ulCategories.children;
console.log('Number of categories: ', ulChildren.length);

const finalMessage = [...ulChildren].forEach(element => {
  console.log('Category: ', element.firstElementChild.textContent);
  console.log('Elements: ', element.lastElementChild.children.length);
});
