const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuLinks = document.querySelectorAll('.menu-links');


console.log(menuBtn);
document.addEventListener('click', e => {
    if (e.target.matches('.menu-btn')) {
        menuBtn.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    }
})

menuLinks.forEach(link => {
    link.addEventListener('click', e => {
        setTimeout(() => {
            menuBtn.classList.remove('is-active');
            menu.classList.remove('is-active');
        }, 600);
    })
})