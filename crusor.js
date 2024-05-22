document.addEventListener('DOMContentLoaded', (event) => {

    //CURSOR
    
    const customCursor = document.createElement('div');
    customCursor.id = 'custom-cursor';
    document.body.appendChild(customCursor);

    const secondaryCursor = document.createElement('div');
    secondaryCursor.id = 'secondary-cursor';
    document.body.appendChild(secondaryCursor);

    let cursorX = window.innerWidth / 4;
    let cursorY = window.innerHeight / 4;
    let mouseX = cursorX;
    let mouseY = cursorY;
    let secondaryX = cursorX;
    let secondaryY = cursorY;

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

    const hoverElements = document.querySelectorAll('.nav-item, #time');
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

    //const hideCursorElements = document.querySelectorAll('#time');
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


});
