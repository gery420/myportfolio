document.addEventListener('DOMContentLoaded', ()=>{

    const yscale = document.querySelectorAll('.box, .one, .two');

    yscale.forEach(element => {
        element.addEventListener('mouseenter', ()=>{
            element.classList.add('hoverone')
        });
        element.addEventListener('mouseleave', ()=>{
            element.classList.remove('hoverone')
        } );
    })

})
