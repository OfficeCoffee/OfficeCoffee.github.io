// src/navHighlight.js

const sections = document.querySelectorAll('.fullscreen-section');

const observerOptions = {
    root: null, // viewport
    rootMargin: '-80px 0px 0px 0px', // offset for nav height
    threshold: 0.5, // trigger when 50% of section is visible
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        const sectionId = entry.target.id;
        const link = document.querySelector(`#top-nav ul li a[href="#${sectionId}"]`);

        if (link) {
            if (entry.isIntersecting) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));
