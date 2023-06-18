const slides = document.querySelectorAll('.slide');

let currentSlide = 0;
slides[0].classList.add('active');
function showSlide(n) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[n].classList.add('active');
}

function showNextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

setInterval(showNextSlide, 5000);

slides.forEach((slide, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) {
    dot.classList.add('active');
  }

  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });

  dotsContainer.appendChild(dot);
});
