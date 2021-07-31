var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination"
    }
});


var testimonialContent = new Swiper(".testimonial-comment", {
    spaceBetween: 10,
    slidesPerView: 1,
    autoplay: true,
    loop: true,
    speed: 3000,
    thumbs: {
        swiper: testimonialThumbs
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

        

  