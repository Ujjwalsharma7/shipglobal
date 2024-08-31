// scripts.js
let currentIndex = 0;

// URL of the fallback image
const fallbackImageUrl =
  "https://via.placeholder.com/800x400?text=Fallback+Image";

// Get all images in the carousel
const images = document.querySelectorAll(".carousel-image");
const totalImages = images.length;

function handleImageError(image) {
  image.src = fallbackImageUrl;
  image.alt = "Fallback Image";
}

function updateCarousel() {
  // Adjust the index if out of bounds
  if (currentIndex >= totalImages - 1) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalImages - 2;
  }

  // Show fallback image if the current image source includes the fallback URL
  if (images[currentIndex].src.includes("Fallback+Image")) {
    document.querySelector(".fallback").style.display = "block";
  } else {
    document.querySelector(".fallback").style.display = "none";
  }

  // Move the carousel to the current image
  const offset = -currentIndex * 100;
  document.querySelector(
    ".carousel-images"
  ).style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
  currentIndex += direction;
  updateCarousel();
}

// Initialize carousel and set up error handling
function initializeCarousel() {
  images.forEach((img) => {
    img.onerror = () => handleImageError(img);
  });
  updateCarousel();
}

window.onload = () => {
  initializeCarousel();
};
