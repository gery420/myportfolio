document.addEventListener('DOMContentLoaded', () => {

    const customCursor = document.createElement('div');
    customCursor.id = 'custom-cursor';
    document.body.appendChild(customCursor);
    
    let cursorX = window.innerWidth / 4;
    let cursorY = window.innerHeight / 4;
    let mouseX = cursorX;
    let mouseY = cursorY;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX ;
        mouseY = e.clientY ;
    });

    //CURSOR-smooth

    function updateCursor() {
        cursorX += (mouseX - cursorX) * 0.14;
        cursorY += (mouseY - cursorY) * 0.14;

        customCursor.style.left = `${cursorX}px`;
        customCursor.style.top = `${cursorY}px`;

        requestAnimationFrame(updateCursor);
    }

    updateCursor();


    const smallHover = document.querySelectorAll('#time, .ash');
    smallHover.forEach(element => {
        element.addEventListener('mouseenter', () => {
            customCursor.classList.add('shover');
        });
        element.addEventListener('mouseleave', () => {
            customCursor.classList.remove('shover');
        });
    });
    const bigHover = document.querySelectorAll('a');
    bigHover.forEach(element => {
        element.addEventListener('mouseenter', () => {
            customCursor.classList.add('bhover');
        });
        element.addEventListener('mouseleave', () => {
            customCursor.classList.remove('bhover');
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

