// 1. Menú móvil
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', () => {
  const abierto = menu.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', abierto);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// 2. Acordeón: solo uno abierto a la vez
const items = document.querySelectorAll('.acordeon__item');
items.forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) items.forEach(o => { if (o !== item) o.open = false; });
  });
});
