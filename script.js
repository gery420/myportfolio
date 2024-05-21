document.addEventListener('DOMContentLoaded', () => {

    //CURSOR
    
    const customCursor = document.createElement('div');
    customCursor.id = 'custom-cursor';
    document.body.appendChild(customCursor);

    const secondaryCursor = document.createElement('div');
    secondaryCursor.id = 'secondary-cursor';
    document.body.appendChild(secondaryCursor);

    let cursorX = 0, cursorY = 0;
    let mouseX = 0, mouseY = 0;
    let secondaryX = 0, secondaryY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX ;
        mouseY = e.clientY ;
    });

    //CURSOR-smooth

    function updateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;

        secondaryX += (cursorX - secondaryX) * 0.2;
        secondaryY += (cursorY - secondaryY) * 0.2;

        customCursor.style.left = `${cursorX}px`;
        customCursor.style.top = `${cursorY}px`;

        secondaryCursor.style.left = `${secondaryX}px`;
        secondaryCursor.style.top = `${secondaryY}px`;

        requestAnimationFrame(updateCursor);
    }

    updateCursor();

    //CURSOR-hover-NAV-BAR

    const hoverElements = document.querySelectorAll('.nav-item');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            customCursor.classList.add('hover');
            secondaryCursor.classList.add('hover');
        });
        element.addEventListener('mouseleave', () => {
            customCursor.classList.remove('hover');
            secondaryCursor.classList.remove('hover');
        });
    });


    //CURSOR-hide

    //const hideCursorElements = document.querySelectorAll('#p3');
    //hideCursorElements.forEach(element => {
    //    element.addEventListener('mouseenter', () => {
    //        customCursor.style.opacity = '0';
    //        secondaryCursor.style.opacity = '0';
    //    });
    //    element.addEventListener('mouseleave', () => {
    //        customCursor.style.opacity = '1';
    //        secondaryCursor.style.opacity = '1';
    //    });
    //});



    //Slide-UP-onScroll

    const slideUpElements = document.querySelectorAll('#p2, #p3');

    function checkSlideUp() {
        slideUpElements.forEach(slideUpElement => {
            const slideInAt = (window.scrollY + window.innerHeight) - slideUpElement.clientHeight / 2;
            const elementBottom = slideUpElement.offsetTop + slideUpElement.clientHeight;
            const isHalfShown = slideInAt > slideUpElement.offsetTop;
            const isNotScrolledPast = window.scrollY < elementBottom;

            if (isHalfShown && isNotScrolledPast) {
                slideUpElement.classList.add('visible');
            } else {
                slideUpElement.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkSlideUp);


    //scrollTo-onClick-NAV-bar

    const links = document.querySelectorAll('#nav a');

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
