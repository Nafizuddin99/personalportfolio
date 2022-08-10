// Typing Script JS
var typed = new Typed(".typing",{
    strings: ["Responsive web designer", "Freelancer" , "web designer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2",{
    strings: ["Responsive web designer", "Freelancer" , "web designer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Show/Hide FAQs answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus';
        }
        else{
            icon.className = 'fa-solid fa-plus';
        }

    })
})

//Show/hide nav menu
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav);

//nav color change on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>100);
})


   // owl carouesel script
   $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 2000,
    autoplayHoverpause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});