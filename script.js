// navbar-fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const navbarFixed = header.offsetTop;

    if (window.pageYOffset > navbarFixed){
        header.classList.add('navbar-fixed'); 
    }else{
        header.classList.remove('navbar-fixed');
    }
}

//button humberger 
const humberger =document.querySelector('#humberger');
humberger.addEventListener('click',function(){
    humberger.classList.toggle('active');
})

// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const navbarFixed = header.offsetTop;
    if (window.pageYOffset > navbarFixed) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};


    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll(".animate-section");

        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate__animated", "animate__fadeIn");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => {
            observer.observe(section);
        });
    });

