const userCardTemplate = document.querySelector('[data-user-card-template]');
const userCardsContainer = document.querySelector('.user-cards-container');
const searchInput = document.querySelector('.search-input');

let users = [];

searchInput.addEventListener('input', e => {
  const value = e.target.value.toLowerCase();
  users.forEach(user => {
    let isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value); // boolean from name or email
    user.element.classList.toggle('display-none', !isVisible)
  })
})

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector('[data-header]');
      const body = card.querySelector('[data-body]');
      header.textContent = user.name;
      body.textContent = user.email;
      userCardsContainer.appendChild(card);
      return { name: user.name, email: user.email, element: card }
    })
  })