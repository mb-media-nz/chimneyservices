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

    
}

export const hideMobileMenu = () => {
    const navIcon = document.querySelector('#nav-icon');
    const menuList = document.querySelector('.mobile-menu');

    if (navIcon?.classList.contains('open')) {
        navIcon.classList.remove('open');
        menuList.classList.remove('open');
    }
}


