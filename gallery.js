document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slider-item');
    const totalSlides = slides.length;
    let index = 0;

    function showSlide(n) {
        if (n >= totalSlides) index = 0;
        else if (n < 0) index = totalSlides - 1;
        else index = n;

        const offset = -index * 100;
        sliderWrapper.style.transform = `translateX(${offset}%)`;
    }

    document.getElementById('next').addEventListener('click', () => {
        showSlide(index + 1);
    });

    document.getElementById('prev').addEventListener('click', () => {
        showSlide(index - 1);
    });

    // Optional: Automatically slide every 5 seconds
    setInterval(() => {
        showSlide(index + 1);
    }, 5000);

    // Initial display
    showSlide(index);
});
