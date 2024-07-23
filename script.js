let index = 0;
const images = document.querySelectorAll('.carousel-slide');

setInterval(() => {
  images[index].style.opacity = 0;
  index = (index + 1) % images.length;
  images[index].style.opacity = 1;
}, 3000); // 3000ms = 3 seconds