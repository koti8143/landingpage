document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navbar-nav .nav-link');
    
    for (const link of links) {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    }
});
