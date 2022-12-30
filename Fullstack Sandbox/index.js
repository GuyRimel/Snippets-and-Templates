const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const slapDiv = (classes, parent) => {
  let div = document.createElement('div');
  if(typeof classes === 'string') div.classList.add(classes);
  else classes.forEach(arrayItem => div.classList.add(arrayItem));
  $(parent).appendChild(div);
}

let fruit = 'coconut';
let fruitList = ['apple', 'orange', 'mango', 'prune'];
let spoiledFruitList = fruitList.map(item => 'spoiled-' + item);

slapDiv('fruit-basket', 'body');

spoiledFruitList.forEach(fruit => {
  slapDiv(['fruit', fruit], '.fruit-basket');
  $('.fruit-basket').lastElementChild.innerText = fruit;
})

for(i = 0; i < 2; i++) {
  fruitList.forEach(fruit => {
    slapDiv(['fruit', fruit], '.fruit-basket');
    $('.fruit-basket').lastElementChild.innerText = fruit;
  })
}
