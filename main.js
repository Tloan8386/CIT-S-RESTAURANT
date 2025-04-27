document.addEventListener('DOMContentLoaded', function() {
    // Slider Logic
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
   
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
   
    document.querySelector('.next').addEventListener('click', () => showSlide(currentSlide + 1));
    document.querySelector('.prev').addEventListener('click', () => showSlide(currentSlide - 1));
   
    // Auto Slide
    let slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
   
    // Mobile Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
   
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
   
    // Scroll Effects
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0,0,128,0.95)';
        } else {
            navbar.style.backgroundColor = 'var(--navy)';
        }
    });
   
    // Parallax Effect
    window.addEventListener('scroll', function() {
        const parallax = document.querySelector('.parallax');
        const scrolled = window.pageYOffset;
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
   
    // Modal Logic
    const modals = document.querySelectorAll('.modal');
   
    document.querySelectorAll('.btn-detail').forEach(btn => {
        btn.addEventListener('click', function() {
            // Logic hiển thị modal
        });
    });
   
    // Form Validation
    const reservationForm = document.getElementById('reservationForm');
    if(reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Lưu vào localStorage
            localStorage.setItem('reservation', JSON.stringify({
                name: this.name.value,
                phone: this.phone.value,
                // Các trường khác
            }));
            alert('Cảm ơn! Chúng tôi sẽ liên hệ xác nhận.');
            this.reset();
        });
    }
   
    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
   
    document.querySelectorAll('.section-padding').forEach(section => {
        observer.observe(section);
    });
});


// Thêm code này vào file script.js
function initPromoCarousel() {
    const promoSlides = document.querySelectorAll('.promo-slide');
    let currentPromoSlide = 0;
   
    function showPromoSlide(n) {
        promoSlides.forEach(slide => slide.classList.remove('active'));
        currentPromoSlide = (n + promoSlides.length) % promoSlides.length;
        promoSlides[currentPromoSlide].classList.add('active');
    }
   
    // Thêm nút điều khiển
    document.querySelector('.carousel-controls .next').addEventListener('click', () => {
        showPromoSlide(currentPromoSlide + 1);
    });
   
    document.querySelector('.carousel-controls .prev').addEventListener('click', () => {
        showPromoSlide(currentPromoSlide - 1);
    });
   
    // Tự động chuyển slide
    let promoInterval = setInterval(() => {
        showPromoSlide(currentPromoSlide + 1);
    }, 5000);
   
    // Dừng tự động chuyển khi hover
    const carousel = document.querySelector('.promo-carousel');
    carousel.addEventListener('mouseenter', () => clearInterval(promoInterval));
    carousel.addEventListener('mouseleave', () => {
        promoInterval = setInterval(() => {
            showPromoSlide(currentPromoSlide + 1);
        }, 5000);
    });
}


// Gọi hàm khởi tạo
if(document.querySelector('.promo-carousel')) {
    initPromoCarousel();
}


function initAboutSlider() {
    const slides = document.querySelectorAll('.about-slide');
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('slider-dots');
    document.querySelector('.about-slider').appendChild(dotsContainer);


    let currentSlide = 0;


    // Tạo dots cho slider
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });


    // Chuyển đến slide theo index
    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        dotsContainer.children[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dotsContainer.children[currentSlide].classList.add('active');
    }


    // Tự động chuyển slide sau mỗi 5 giây
    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);
}


// Khởi tạo slider
if (document.querySelector('.about-slider')) {
    initAboutSlider();
}



