(function () {
    "use strict";

    const typed = document.querySelector('.typed')
    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items')
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }

    const sections = document.querySelectorAll("section[id]");
    document.querySelector(".nav a[href*=index-section]").classList.add("active");
    window.addEventListener("scroll", function () {
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            let sectionId = current.getAttribute("id");
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(".nav a[href*=" + sectionId + "]")
                    .classList.add("active");
            } else {
                document.querySelector(".nav a[href*=" + sectionId + "]")
                    .classList.remove("active");
            }
        });
    });
})()