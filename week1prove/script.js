var menu = document.getElementById('drop-down');

menu.addEventListener('change', function() {
    console.log('Hit');
    var val = menu.value;

    if (val == 'dark') {
        darkMode();
    } else {
        lightMode();
    }
});

function darkMode() {
    var body = document.body;
    var html = document.documentElement;
    var h1 = document.querySelector('h1');
    var h2 = document.querySelector('h2');
    var img = document.querySelector('img');

    html.classList.add('dark');
    body.classList.add('dark');
    body.setAttribute('id', 'white-border');
    img.classList.add('dark');
    h1.classList.add('dark-byu');
    h2.setAttribute('id', 'byu-underline');
}

function lightMode() {
    var body = document.body;
    var html = document.documentElement;
    var h1 = document.querySelector('h1');
    var h2 = document.querySelector('h2');
    var img = document.querySelector('img');

    html.classList.remove('dark');
    body.classList.remove('dark');
    body.removeAttribute('id');
    img.classList.remove('dark');
    h1.classList.remove('dark-byu');
    h2.removeAttribute('id');
}