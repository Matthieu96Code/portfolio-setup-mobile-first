let allBody = document.querySelector('body');
let btn = document.querySelector('.nav-btn');
let btnClose = document.querySelector('.close-btn');

btn.addEventListener('click', function() {
    allBody.classList.toggle('expand');
});

btnClose.addEventListener('click', function() {
    allBody.classList.toggle('expand');
});