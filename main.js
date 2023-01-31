const allBody = document.querySelector('body');
const btn = document.querySelector('.nav-btn');
const btnClose = document.querySelector('.close-btn');
const menuList = document.querySelectorAll('.nav-toggle a');

btn.addEventListener('click', () => {
  allBody.classList.add('expand');
});

btnClose.addEventListener('click', () => {
  allBody.classList.remove('expand');
});

for (let list = 0; list < menuList.length; list += 1) {
  list.addEventListener('click', () => {
    allBody.classList.remove('expand');
  });
}
