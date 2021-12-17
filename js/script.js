//tabs
const faqs = document.querySelectorAll('.faq'); 

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('active');
        });
    });

//mobile menu
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-menu');
const menuClose = document.querySelector('.menu-close');
const linksClose = document.querySelectorAll('.nav-menu-link');
const links = document.querySelectorAll('.nav-menu-link');


menuButton.addEventListener('click', () => {
    menu.classList.add('is-active');
    menuClose.classList.add('is-active');
});
menuClose.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuClose.classList.remove('is-active');
});
linksClose.forEach(linkClose => {
    linkClose.addEventListener('click', () => {
        menu.classList.remove('is-active');
        menuClose.classList.remove('is-active');
    });
});

//smooth scroll
const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// //fixed header 
// window.onscroll = () => {
//     const header = document.querySelector('.header');
//     const Y = window.scrollY; 

//     if (Y > 300) {
//         header.classList.add('header-fixed')
//     } else if (Y < 300) {
//         header.classList.remove('header-fixed')
//     }
// }
