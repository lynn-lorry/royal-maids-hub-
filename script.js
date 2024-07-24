let index = 0;
const images = document.querySelectorAll('.carousel-slide');

setInterval(() => {
  images[index].style.opacity = 0;
  index = (index + 1) % images.length;
  images[index].style.opacity = 1;
}, 3000); // 3000ms = 3 seconds
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlides();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlides();
});

function updateSlides() {
  const translateX = -currentIndex * 100;
  document.querySelector('.carousel-slides').style.transform = `translateX(${translateX}%)`;
}