document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const doctorsList = document.getElementById('doctors-list');
    const numDoctors = 6;
    const doctorWidth = 500; // Width of each doctor item in pixels
    let currentIndex = 0;

    function updateCarousel() {
        let translation = -currentIndex * doctorWidth;
        doctorsList.style.transform = `translateX(${translation}px)`;

        // Wrap-around effect
        if (currentIndex === 0) {
            translation = -numDoctors * doctorWidth; // Move to the last doctor
        } else if (currentIndex === numDoctors - 1) {
            translation = -doctorWidth; // Move to the first doctor
        }

        doctorsList.style.transition = 'none'; // Disable transition for smooth wrapping
        doctorsList.style.transform = `translateX(${translation}px)`;
        setTimeout(() => {
            doctorsList.style.transition = ''; // Re-enable transition
            doctorsList.style.transform = `translateX(-${currentIndex * doctorWidth}px)`;
        }, 50); // Delay to allow the repositioning to take effect
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


function navigateTo(page) {
    window.location.href = page;
}
