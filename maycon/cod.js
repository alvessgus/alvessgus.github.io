let currentIndex = 1; 
let isTransitioning = false;
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length;
    const firstClone = images[0].cloneNode(true);
    const lastClone = images[totalImages - 1].cloneNode(true);
    carousel.appendChild(firstClone);
    carousel.insertBefore(lastClone, carousel.firstChild);
    const realTotalImages = totalImages; 
    const imageWidth = images[0].clientWidth + 10; 
    carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

   window.moveCarousel = function (direction) {
        if (isTransitioning) return; 
        currentIndex += direction;
        isTransitioning = true;
        carousel.style.transition = "transform 0.5s ease-in-out";
        carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    };
    carousel.addEventListener("transitionend", () => {
        isTransitioning = false;

        if (currentIndex === realTotalImages - 1) {
            carousel.style.transition = "none";
            currentIndex = 1;
            carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        }
        if (currentIndex === 0) {
            carousel.style.transition = "none";
            currentIndex = realTotalImages - 1;
            carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        }
    });
});
function mostrarOpcoes(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
