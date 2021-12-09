let el = document.querySelector('.menu-mobile-icon');
el.addEventListener('click', () => {
    // Irei mostrar o menu
    let menuItems = document.querySelector('.menu-item');
    if(menuItems.classList.contains('show')){
        menuItems.classList.add('hide'); // Oculta
        menuItems.classList.remove('show');
    } else {
        menuItems.classList.add('show'); // Mostra
        menuItems.classList.remove('hide');

    }
})