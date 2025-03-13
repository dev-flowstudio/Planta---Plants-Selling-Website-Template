const preloader = document.querySelector('.preloader'),
   navbar = document.querySelector('.navbar'),
   nav_content = document.querySelector('.nav-content'),
   nav_logo = navbar.querySelector('.brand-logo'),
   nav_menu = document.querySelector('.nav-menu'),
   nav_items = nav_menu.querySelectorAll('.nav-item'),
   nav_actions = nav_content.querySelector('.nav-actions'),
   menu_icon = document.querySelector('#menu-icon'),
   site_header = document.querySelector('#site-header'),
   header_content = site_header.querySelector('.header-content'),
   search_box = document.querySelector('.search-box'),
   search_input = nav_actions.querySelector('.search-box input'),
   backToTopBtn = document.querySelector("#back-to-top");


// Initialize AOS
AOS.init({
   easing: 'ease-in-out-sine'
});


onload = () => {
   // Hide preloader
   setTimeout(() => preloader.style.display = 'none');
   // Set header height to window height
   site_header.style.height = window.innerHeight + 'px';
};


// Add "fixed" class to navbar on scroll
onscroll = () => {
   if (pageYOffset > 0) {
      navbar.classList.add('fixed');
   }
   else if (pageYOffset === 0) {
      navbar.classList.remove('fixed');
   }
};


// Sidebar open and close
function menufunc() {
   nav_menu.classList.toggle('active');
}
menu_icon.onclick = menufunc;
nav_items.forEach(item => item.onclick = menufunc);


// Close sidebar when clicked outside
document.addEventListener('click', event => {
   if (!event.target.closest('.nav-menu') && !event.target.closest('#menu-icon')) {
      nav_menu.classList.remove('active');
   }
});


// Hero slider initialization
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


// Product slider initialization
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
      // when window width is >= 320px
      400: {
         slidesPerView: 1,
         spaceBetween: 10
      },
      // when window width is >= 480px
      600: {
         slidesPerView: 2,
         spaceBetween: 10
      },
      // when window width is >= 640px
      800: {
         slidesPerView: 3,
         spaceBetween: 20
      },
      // when window width is >= 880px
      1000: {
         slidesPerView: 4,
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


// Keyboard navigation and interaction with product slider
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


// Scroll the page to very top on "backToTopBtn" click
backToTopBtn.addEventListener('click', () => {
   window.scrollTo({ top: 0, behavior: 'smooth' });
});





const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-item>a");

const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         navLinks.forEach(link => link.classList.remove("active"));
         document.querySelector(`a[href="#${entry.target.id}"]`).classList.add("active");
      }
   });
}, { threshold: 0.6 });

sections.forEach(section => observer.observe(section));







// document.addEventListener("DOMContentLoaded", function() {
//    const backToTopBtn = document.getElementById("back-to-top");
//    const footer = document.querySelector("footer"); // Adjust if needed

//    const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//          backToTopBtn.style.display = "none"; // Hide when footer is visible
//       } else {
//          backToTopBtn.style.display = "block"; // Show otherwise
//       }
//    }, { root: null, threshold: 0.1 });

//    observer.observe(footer);
// });




// const swiper = new Swiper('.swiper', {
//    speed: 500,
//    loop: true,
//    autoplay: {
//       delay: 2000,
//    },

//    effect: 'coverflow',
//    coverflowEffect: {
//       depth: 300,
//       rotate: 10,
//       modifier: 1,
//       slideShadows: false,
//       scale: 1,
//    },

//    // Responsive breakpoints
//    breakpoints: {
//       // when window width is >= 320px
//       320: {
//          slidesPerView: 1,
//          spaceBetween: 20
//       },
//       // when window width is >= 480px
//       480: {
//          slidesPerView: 2,
//          spaceBetween: 30
//       },
//       // when window width is >= 640px
//       640: {
//          slidesPerView: 3,
//          spaceBetween: 40
//       }
//    },

//    navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//    },

//    a11y: {
//       prevSlideMessage: 'Previous slide',
//       nextSlideMessage: 'Next slide',
//    },
// });


// const swiper = document.querySelector('.swiper').swiper;

// // Now you can use all slider methods like
// swiper.slideNext();






// Coverflow Effect Parameters
// depth
// number
// 100
// Depth offset in px (slides translate in Z axis)

// modifier
// number
// 1
// Effect multiplier

// rotate
// number
// 50
// Slide rotate in degrees

// scale
// number
// 1
// Slide scale effect

// slideShadows
// boolean
// true
// Enables slides shadows

// stretch
// number
// 0
// Stretch space between slides (in px)



document.addEventListener("DOMContentLoaded", () => {
   document.querySelectorAll(".menu-btn, .submenu-btn").forEach(button => {
      button.setAttribute("aria-expanded", "false");
      
      button.addEventListener("click", function(e) {
         let dropdown = this.nextElementSibling;
         let isExpanded = this.getAttribute("aria-expanded") === "true";
         
         // Close other menus, but not the current submenu
         document.querySelectorAll(".dropdown").forEach(menu => {
            if (menu !== dropdown && !menu.contains(dropdown)) {
               menu.style.display = "none";
               menu.previousElementSibling?.setAttribute("aria-expanded", "false");
            }
         });
         
         // Toggle clicked menu
         dropdown.style.display = isExpanded ? "none" : "flex";
         this.setAttribute("aria-expanded", isExpanded ? "false" : "true");
         
         e.stopPropagation(); // Prevent immediate closing
      });
   });
   
   // Close dropdowns when clicking outside
   document.addEventListener("click", (e) => {
      if (!e.target.closest(".menu")) {
         document.querySelectorAll(".dropdown").forEach(menu => {
            menu.style.display = "none";
            menu.previousElementSibling?.setAttribute("aria-expanded", "false");
         });
      }
   });
   
   // Ensure clicking a link in the dropdown closes the menu
   document.querySelectorAll('.dropdown a[href^="#"]').forEach(link => {
      link.addEventListener("click", (e) => {
         let targetId = link.getAttribute("href").substring(1);
         let targetElement = document.getElementById(targetId);
         
         if (targetElement) {
            e.preventDefault(); // Prevent default jump
            
            // Scroll smoothly
            targetElement.scrollIntoView({ behavior: "smooth" });
            
            // Close menu after scroll
            setTimeout(() => {
               document.querySelectorAll(".dropdown").forEach(menu => {
                  menu.style.display = "none";
                  menu.previousElementSibling?.setAttribute("aria-expanded", "false");
               });
            }, 300);
         }
      });
   });
});









// Initialize LightGallery
// lightGallery(document.getElementById('lightgallery'));



// const canvas = document.getElementById("snowCanvas");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// canvas.style.position = "fixed";
// canvas.style.top = "0";
// canvas.style.left = "0";
// canvas.style.pointerEvents = "none"; // Makes sure clicks go through

// let snowflakes = [];

// function createSnowflakes() {
//    for (let i = 0; i < 100; i++) {
//       snowflakes.push({
//          x: Math.random() * canvas.width,
//          y: Math.random() * canvas.height,
//          radius: Math.random() * 3 + 2,
//          speed: Math.random() * 3 + 1,
//       });
//    }
// }

// function drawSnowflakes() {
//    ctx.clearRect(0, 0, canvas.width, canvas.height);
//    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
//    ctx.beginPath();
//    snowflakes.forEach((flake) => {
//       ctx.moveTo(flake.x, flake.y);
//       ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
//    });
//    ctx.fill();
// }

// function updateSnowflakes() {
//    snowflakes.forEach((flake) => {
//       flake.y += flake.speed;
//       if (flake.y > canvas.height) flake.y = 0; // Reset to top
//    });
// }

// function animate() {
//    drawSnowflakes();
//    updateSnowflakes();
//    requestAnimationFrame(animate);
// }

// createSnowflakes();
// animate();