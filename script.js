window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('black-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 2000); // 2000 milliseconds = 2 seconds
});

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
