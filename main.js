const allBody = document.querySelector('body');
const btn = document.querySelector('.nav-btn');
const btnClose = document.querySelector('.close-btn');
const menuList = document.querySelectorAll('.nav-toggle a');

btn.addEventListener('click', function addClassToBody () {
  allBody.classList.add('expand');
});

btnClose.addEventListener('click', function removeClassToBody () {
  allBody.classList.remove('expand');
});

for (let list of menuList) {
  list.addEventListener('click', function removeClassExpand () {
    allBody.classList.remove('expand');
  });
}