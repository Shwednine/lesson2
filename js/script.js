const hamburger = document.querySelector('.hamburger'),
    mobile = document.querySelector('.mobile'),
    closeElem = document.querySelector('.mobile__close'),
    rootElement = document.documentElement;

hamburger.addEventListener('click', function () {
    mobile.classList.add('active');
});
closeElem.addEventListener('click', function () {
    mobile.classList.remove('active');
});

