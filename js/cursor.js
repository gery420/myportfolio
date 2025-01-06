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

});

