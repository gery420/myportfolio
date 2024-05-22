/*const slideUpElements = document.querySelectorAll('#p2, #p3');
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
*/
