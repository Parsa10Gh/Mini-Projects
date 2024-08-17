let $ = document;
const mainNav = $.getElementById('mainNav');
const logoImg = $.querySelector('img');

document.addEventListener('scroll', function () {
    if ($.documentElement.scrollTop > 0) {
        logoImg.style.height = '64px'
        mainNav.classList.add('bg-black')
        mainNav.classList.add('txt-white')
    } else {
        logoImg.style.height = '84px'
        mainNav.classList.remove('bg-black')
        mainNav.classList.remove('txt-white')
    }
})