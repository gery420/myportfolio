document.addEventListener('DOMContentLoaded',() => {
    const links = document.querySelectorAll('.nav');

    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop, 
                behavior: 'smooth'
            });
        });
    }
});
