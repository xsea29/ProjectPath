function openForm() {
  document.getElementById("contactForm").style.display = "block";
}

function closeForm() {
  document.getElementById("contactForm").style.display = "none";
}

// Close the form if the user clicks outside of it
window.onclick = function (event) {
  const form = document.getElementById("contactForm");
  if (event.target == form) {
    closeForm();
  }
};

// Slider functionality
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  let slideInterval;

  function showSlides(index) {
    const offset = index * -25;
    document.querySelector(
      ".slider"
    ).style.transform = `translateX(${offset}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlides(currentIndex);
  }

  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 3000); // Adjust the interval for the desired delay
  }

  function stopSlideShow() {
    clearInterval(slideInterval);
  }

  slides.forEach((slide) => {
    slide.addEventListener("mouseenter", stopSlideShow);
    slide.addEventListener("mouseleave", startSlideShow);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentIndex = i;
      showSlides(currentIndex);
      stopSlideShow();
      startSlideShow();
    });
  });

  showSlides(currentIndex);
  startSlideShow();
});

//Our Project section

document.addEventListener("DOMContentLoaded", () => {
  const detailItems = document.querySelectorAll(".detail-item");
  const projectImage = document.querySelector(".project-image img");

  const images = [
    "./Images/image-5.png", // Add your image paths here
    "./Images/image-2.png",
    "./Images/image-4.png",
  ];

  detailItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Remove active class from all items
      detailItems.forEach((detail) => detail.classList.remove("active"));

      // Add active class to the clicked item
      item.classList.add("active");

      // Change the image source
      projectImage.src = images[index % images.length]; // Cycle through images
    });
  });
});
