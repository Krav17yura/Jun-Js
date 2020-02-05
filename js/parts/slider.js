function slider() {
    let sliderIndex = 1,
        slides = document.querySelectorAll(".slider-item"),
        next = document.querySelector(".next"),
        prev = document.querySelector(".prev"),
        sliderDots = document.querySelector(".slider-dots"),
        dots = document.querySelectorAll(".dot");

    showSlides(sliderIndex);

    function showSlides(n) {
        if (n > slides.length) {
            sliderIndex = 1;
        }
        if (n < 1) {
            sliderIndex = slides.length;
        }


        slides.forEach((item) => item.style.display = "none");
        dots.forEach((item) => item.classList.remove("dot-active"));

        slides[sliderIndex - 1].style.display = "block";
        dots[sliderIndex - 1].classList.add("dot-active");


    }

    function nextSlidetr(n) {
        showSlides(sliderIndex += n);
    }

    function prevSlider(n) {
        showSlides(sliderIndex = n);
    }

    next.addEventListener('click', function () {
        nextSlidetr(1);
    });

    prev.addEventListener('click', function () {
        nextSlidetr(-1);
    });

    sliderDots.addEventListener('click', function (e) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
                prevSlider(i);
            }
        }
    });
}

module.exports = slider;