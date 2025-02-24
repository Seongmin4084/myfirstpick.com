document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const totalSlides = slides.length;
    let autoSlideInterval;

    function showSlide(index) {
        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        } else {
            slideIndex = index;
        }

        document.querySelector(".slider").style.transform = `translateX(-${slideIndex * 100}%)`;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[slideIndex].classList.add("active");

        resetAutoSlide();
    }

    window.changeSlide = function(step) {
        showSlide(slideIndex + step);
    };

    window.setSlide = function(index) {
        showSlide(index);
    };

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            changeSlide(1);
        }, 3000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    showSlide(slideIndex);
    startAutoSlide();
});
