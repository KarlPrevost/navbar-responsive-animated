const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.body;

    window.addEventListener('click', function(e){
        if((burger.classList.contains('toggle'))){
            if (document.querySelector('.nav-links').contains(e.target) || document.querySelector('.burger').contains(e.target)){
            } else
            {
                burger.classList.toggle('toggle');
                nav.classList.toggle('nav-active');
                body.classList.toggle('body-nav-active');

                navLinks.forEach((link, index) => {
                    if(link.style.animation){
                        link.style.animation = '';
                    }else {
                        link.style.animation = `navLinkFade 0.5s ease forwards ${index/10+0.1}s`;
                    }
                });
            }
        }
    });

    burger.addEventListener('click', () => {
        // toggle nav and body
        nav.classList.toggle('nav-active');


        // animation link
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/10+0.1}s`;
            }
            
        });

        // burger animation
        ;
        burger.classList.toggle('toggle');
        body.classList.toggle('body-nav-active');
    });
}

navSlide();