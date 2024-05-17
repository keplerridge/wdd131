const menuButton = document.getElementById('button');
const nav = document.getElementById('nav');

menuButton.addEventListener('click', showMenu);

function showMenu() {
    if (nav.classList.contains('hide')) {
        nav.classList.remove('hide')
    } else {
        nav.classList.add('hide')
    }
}