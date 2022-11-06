const itemElement = document.querySelectorAll(`.item`);
console.log(`Number of categories:${itemElement.length}`);

itemElement.forEach((el) => {
  console.log(`Category:${el.firstElementChild.textContent}`);
  console.log(`Elements:${el.lastElementChild.children.length}`);
});
