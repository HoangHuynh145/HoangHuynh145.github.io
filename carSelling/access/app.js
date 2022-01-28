const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const menu = $('#menu-btn')
const navbar = $('.navbar')
const loginBtn = $('#login-btn')
const closeLoginBtn = $('#close-login-form')
const loginForm = $('.login-form-container')
const home = $('.home')
console.log(loginBtn);
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

loginBtn.onclick = () => {
    loginForm.classList.toggle('active')
}

closeLoginBtn.onclick = () => {
    loginForm.classList.remove('active')
}

home.onmousemove = (e) => {
    $$('.home-parallax').forEach(elm => {
        const speed = elm.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 90;
        const y = (window.innerHeight - e.pageY * speed) / 90;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`
    })
}

home.onmouseleave = (e) => {
    $$('.home-parallax').forEach(elm => {

        const x = 0;
        const y = 0;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`
    })
}

window.onscroll = () => {

    if (window.scrollY > 0) {
        $('.header').classList.add('active')
    } else {
        $('.header').classList.remove('active')
    }

    menu.classList.remove('fa-times');
    navbar.classList.remove('active')
}

window.onload = () => {

    if (window.scrollY > 0) {
        $('.header').classList.add('active')
    } else {
        $('.header').classList.remove('active')
    }
}

var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true, // Tạo ảnh đầu ở sau nếu đang hiện ở tấm cuối
    grabCursor: true, // lấy con trỏ
    centeredSlides: true, // đưa ảnh hiện ở trung tâm
    autoplay: {
        delay: 5000, // thời gian để chuyển ảnh
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // chiều rộng cửa sổ dưới 768 sẽ chạy 1 slide
        0: {
            slidesPerView: 1,
        },
        // chiều rộng cửa sổ dưới 991 sẽ chạy 2 slide
        768: {
            slidesPerView: 2,
        },
        // chiều rộng cửa sổ trên 991 sẽ chạy 3 slide
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true, // Tạo ảnh đầu ở sau nếu đang hiện ở tấm cuối
    grabCursor: true, // lấy con trỏ
    centeredSlides: true, // đưa ảnh hiện ở trung tâm
    autoplay: {
        delay: 3000, // thời gian để chuyển ảnh
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // chiều rộng cửa sổ dưới 768 sẽ chạy 1 slide
        0: {
            slidesPerView: 1,
        },
        // chiều rộng cửa sổ dưới 991 sẽ chạy 2 slide
        768: {
            slidesPerView: 2,
        },
        // chiều rộng cửa sổ trên 991 sẽ chạy 3 slide
        1040: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true, // Tạo ảnh đầu ở sau nếu đang hiện ở tấm cuối
    grabCursor: true, // lấy con trỏ
    centeredSlides: true, // đưa ảnh hiện ở trung tâm
    autoplay: {
        delay: 3000, // thời gian để chuyển ảnh
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // chiều rộng cửa sổ dưới 768 sẽ chạy 1 slide
        0: {
            slidesPerView: 1,
        },
        // chiều rộng cửa sổ dưới 991 sẽ chạy 2 slide
        768: {
            slidesPerView: 2,
        },
        // chiều rộng cửa sổ trên 991 sẽ chạy 3 slide
        1040: {
            slidesPerView: 3,
        },
    },
});