const preloader = document.querySelector('.preloader'),
   navbar = document.querySelector('.navbar'),
   nav_content = document.querySelector('.nav-content'),
   nav_logo = navbar.querySelector('.brand-logo'),
   nav_menu = document.querySelector('.nav-menu'),
   nav_items = nav_menu.querySelectorAll('.nav-item'),
   nav_actions = nav_content.querySelector('.nav-actions'),
   menu_icon = document.querySelector('#menu-icon'),
   header = document.querySelector('.header-content'),
   search_box = document.querySelector('.search-box'),
   search_input = nav_actions.querySelector('.search-box input')

window.onload = () => {
   // Hide preloader
   // setTimeout(() => preloader.style.display = 'none', 1000);
};


//___Navbar show and hide

function menufunc() {
   nav_menu.classList.toggle('active');
   
   setTimeout(() => {
      menu_icon.classList.toggle('fixed');
   }, 100);
}

menu_icon.onclick = menufunc;
nav_items.forEach(item => item.onclick = menufunc);


onscroll = () => {
   if (pageYOffset > 0) {
      navbar.classList.add('fixed');
   }
   else if (pageYOffset === 0) {
      navbar.classList.remove('fixed');
   }
};




// backToTop
backToTopBtn.addEventListener('click', () => {
   window.scrollTo({ top: 0, behavior: 'smooth' });
});

/*
document.addEventListener("DOMContentLoaded", function() {
   const backToTopBtn = document.getElementById("back-to-top");
   const footer = document.querySelector("footer"); // Adjust if needed
   
   const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
         backToTopBtn.style.display = "none"; // Hide when footer is visible
      } else {
         backToTopBtn.style.display = "block"; // Show otherwise
      }
   }, { root: null, threshold: 0.1 });
   
   observer.observe(footer);
});
*/


const hero_slider = new Swiper('.hero-slider', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   autoplay: true,
   effect: 'fade',
   
   // Navigation
   // navigation: {
   // nextEl: '.swiper-button-next',
   // prevEl: '.swiper-button-prev',
   // },
   
   // Pagination
   pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
   },
   
   // Scrollbar
   // scrollbar: {
   //    el: '.swiper-scrollbar',
   // },
   
   // effect: 'creative',
   // creativeEffect: {
   //    prev: {
   //       // will set `translateZ(-400px)` on previous slides
   //       translate: [0, 0, -400],
   //    },
   //    next: {
   //       // will set `translateX(100%)` on next slides
   //       translate: ['100%', 0, 0],
   //    },
   // },
});







/*
var swiper = new Swiper(".swiper-container", {
   keyboard: {
      enabled: true,
      onlyInViewport: true, // Ensures it only works when Swiper is in the viewport
      pageUpDown: true, // Enables Page Up and Page Down keys
   },
});


let debounce = false;

document.addEventListener("keydown", function(event) {
   // Ignore key events if an input, textarea, or select is focused
   if (document.activeElement.tagName === "INPUT" ||
      document.activeElement.tagName === "TEXTAREA" ||
      document.activeElement.tagName === "SELECT") {
      return;
   }
   
   if (debounce) return; // Prevent action if debounce is active
   
   debounce = true;
   setTimeout(() => debounce = false, 300); // Adjust delay time
   
   
   if (event.key === "ArrowRight") {
      swiper.slideNext(); // Go to next slide
   } else if (event.key === "ArrowLeft") {
      swiper.slidePrev(); // Go to previous slide
   } else if (event.key === "1") {
      swiper.slideTo(0); // Jump to the first slide (index 0)
   } else if (event.key === "2") {
      swiper.slideTo(1); // Jump to the second slide (index 1)
   } else if (event.key === "Home") {
      swiper.slideTo(0); // Go to the first slide
   } else if (event.key === "End") {
      swiper.slideTo(swiper.slides.length - 1); // Go to the last slide
   }
});
*/



const product_slider = new Swiper('.product-slider', {
   direction: 'horizontal',
   loop: true,
   autoplay: true,
   
   keyboard: {
      enabled: true,
      onlyInViewport: true, // Ensures it only works when Swiper is in the viewport
      pageUpDown: true, // Enables Page Up and Page Down keys
   },
   
   breakpoints: {
      // when window width is >= 100px
      100: {
         slidesPerView: 1,
         spaceBetween: 10
      },
      // when window width is >= 320px
      320: {
         slidesPerView: 2,
         spaceBetween: 10
      },
      // when window width is >= 480px
      580: {
         slidesPerView: 3,
         spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
         slidesPerView: 4,
         spaceBetween: 20
      },
      // when window width is >= 880px
      880: {
         slidesPerView: 5,
         spaceBetween: 20
      },
      // when window width is >= 1000px
      1000: {
         slidesPerView: 6,
         spaceBetween: 20
      },
   },
   
   navigation: {
      nextEl: '.product-next',
      prevEl: '.product-prev',
   },
   
   pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
   },
   
   // scrollbar: {
   //    el: '.swiper-scrollbar',
   // },
});


let debounce = false;

document.addEventListener("keydown", function(event) {
   // Ignore key events if an input, textarea, or select is focused
   if (document.activeElement.tagName === "INPUT" ||
      document.activeElement.tagName === "TEXTAREA" ||
      document.activeElement.tagName === "SELECT") {
      return;
   }
   
   if (debounce) return; // Prevent action if debounce is active
   
   debounce = true;
   setTimeout(() => debounce = false, 300); // Adjust delay time
   
   
   if (event.key === "ArrowRight") {
      product_slider.slideNext(); // Go to next slide
   } else if (event.key === "ArrowLeft") {
      product_slider.slidePrev(); // Go to previous slide
   } else if (event.key === "Home") {
      swiper.slideTo(0); // Go to the first slide
   } else if (event.key === "End") {
      swiper.slideTo(swiper.slides.length - 1); // Go to the last slide
   }
});










/*
const swiper = new Swiper('.swiper', {
   speed: 500,
   loop: true,
   autoplay: {
      delay: 2000,
   },

   effect: 'coverflow',
   coverflowEffect: {
      depth: 300,
      rotate: 10,
      modifier: 1,
      slideShadows: false,
      scale: 1,
   },

   // Responsive breakpoints
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 1,
         spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
         slidesPerView: 2,
         spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
         slidesPerView: 3,
         spaceBetween: 40
      }
   },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
   },
});


// const swiper = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like
// swiper.slideNext();


/*
Coverflow Effect Parameters
depth
number
100
Depth offset in px (slides translate in Z axis)

modifier
number
1
Effect multiplier

rotate
number
50
Slide rotate in degrees

scale
number
1
Slide scale effect

slideShadows
boolean
true
Enables slides shadows

stretch
number
0
Stretch space between slides (in px)
*/