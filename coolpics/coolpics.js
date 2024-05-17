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

const closeButton = document.getElementById('viewer-exit');
const modal = document.getElementById('div-viewer');
const modalImg = document.getElementById('big-img');

closeButton.addEventListener('click', closeModal);

function closeModal() {
    modal.classList.add('hide');
}

document.addEventListener('DOMContentLoaded', handleImages);

const figures = document.querySelectorAll('.close-picture img');

function handleImages() {
    figures.forEach(function(image){
        image.addEventListener('click', function(){
            modalImg.src = image.src;
            modalImg.alt = image.alt;
            modal.classList.remove('hide');
            modal.classList.add('viewer');
        })
    })
}