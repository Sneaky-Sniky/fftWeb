// script.js

document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const doctorsList = document.getElementById('doctors-list');
    let currentIndex = 0;
    const numDoctors = 6;

    function updateCarousel() {
        doctorsList.style.transform = `translateX(-${currentIndex * 500}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % numDoctors;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + numDoctors) % numDoctors;
        updateCarousel();

    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    updateCarousel();
});

