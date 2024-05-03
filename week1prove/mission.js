const selectMenu = document.getElementById("drop-down");

selectMenu.addEventListener('change', function() {
    console.log('hit');
    changeTheme();
});

function changeTheme() {
    const selection = selectMenu.value;
    const image = document.getElementById('my_img');
    const body = document.getElementById('body');

    if (selection == 'dark') {
        body.classList.add('dark')
        image.src = './byui-dark-logo.webp';
    } else {
        body.classList.remove('dark')
        image.src = './byui-logo_blue.webp';
    }
}