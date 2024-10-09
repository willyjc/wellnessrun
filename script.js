document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const dotsContainer = document.querySelector(".slider-dots");

  let slideIndex = 0;
  const slideInterval = 3000; // Interval in milliseconds (3 seconds here)
  let autoSlideInterval;

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.setAttribute("data-slide", index);
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  // Show slide function
  const showSlide = () => {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = "block";
        dots[index].classList.add("active");
      } else {
        slide.style.display = "none";
        dots[index].classList.remove("active");
      }
    });
  };

  // Next slide
  const nextSlide = () => {
    if (slideIndex === slides.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    showSlide();
  };

  // Previous slide
  const prevSlide = () => {
    if (slideIndex === 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex--;
    }
    showSlide();
  };

  // Arrow click events
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });
  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  // Dot click events
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      slideIndex = parseInt(dot.getAttribute("data-slide"));
      showSlide();
      resetAutoSlide();
    });
  });

  // Automatic slide function
  const startAutoSlide = () => {
    autoSlideInterval = setInterval(nextSlide, slideInterval);
  };

  // Reset automatic slide interval
  const resetAutoSlide = () => {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  };

  // Initial slide display and start automatic sliding
  showSlide();
  startAutoSlide();
});

// Set the date we're counting down to
const countdownDate = new Date("2024-11-10T00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the countdown date
    const distance = countdownDate - now;
    
    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the respective elements
    document.getElementById("days").innerHTML = String(days).padStart(2, '0');
    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');
    
    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);
