export const updateActiveMenu = (href: string) => {

    // Check url and set link to active
    const links = document.querySelectorAll('.nav-li a');
    const url = href;

    links.forEach((link) => {
        link.classList.remove('text-gray-500');
        if (link.getAttribute('href') === url) {
            link.classList.add('text-gray-500');
        }
    });

    // When click nav-icon, toggle mobile menu
    const navIcon = document.querySelector('#nav-icon');
    const menuList = document.querySelector('.mobile-menu');

    if (navIcon) {
        navIcon.addEventListener('click', () => {
            console.log('clikc');
            navIcon.classList.toggle('open');
            // @ts-ignore
            menuList.classList.toggle('open');
        });
    }
}

export const hideMobileMenu = () => {
    document.querySelector('#nav-icon')?.classList.toggle('open');
    document.querySelector('.mobile-menu')?.classList.toggle('open');
}


