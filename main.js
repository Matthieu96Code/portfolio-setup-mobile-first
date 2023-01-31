let allBody = document.querySelector('body');
let btn = document.querySelector('.nav-btn');
let btnClose = document.querySelector('.close-btn');
let menuList = document.querySelectorAll('.nav-toggle a');

btn.addEventListener('click', function() {
    allBody.classList.add('expand');
});

btnClose.addEventListener('click', function() {
    allBody.classList.remove('expand');
});

for (let list of menuList) {
    list.addEventListener('click', function() {
        allBody.classList.remove('expand');
    });    
}