var menu = document.getElementsByTagName('select')[0];

menu.addEventListener('change', darkMode()) {
    var value = menu.value;

    if (selectedValue == 'dark') {
        darkMode();
    } else {
        lightMode();
    }
}

function darkMode() {
    var body = document.getElementsByTagName('body')[0];
    var html = document.getElementsByTagName('html')[0];
    var h1 = document.getElementsByTagName('h1')[0];
    var img = document.getElementsByTagName('img')[0];

    html.classList.add('dark');
    html.classList.add('white-border');
    body.classList.add('dark');
    body.classList.add('white-border');
    img.classList.add('dark');
    h1.classList.add('dark-byu');
}

function lightMode() {
    var body = document.getElementsByTagName('body')[0];
    var html = document.getElementsByTagName('html')[0];
    var h1 = document.getElementsByTagName('h1')[0];
    var img = document.getElementsByTagName('img')[0];

    html.classList.remove('dark');
    html.classList.remove('white-border');
    body.classList.remove('dark');
    body.classList.remove('white-border');
    img.classList.remove('dark');
    h1.classList.remove('dark-byu');
}