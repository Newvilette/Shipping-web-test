// script.js
// Placeholder for future JavaScript features (form validation, dynamic content, etc.)
console.log("Website loaded.");
const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
let currentIndex = 0;

function updateActive() {
  items.forEach((item, i) => {
    item.classList.toggle('active', i === currentIndex);
  });

  const container = track.parentElement;
  const containerWidth = container.offsetWidth;

  const gap = 15;
  const itemWidth = items[0].offsetWidth;

  // Calculate total width with gaps
  const totalWidth = items.length * itemWidth + (items.length - 1) * gap;

  // Calculate translateX to center active item
  // Center active image: container center minus (active image center position)
  const activeCenterPosition = currentIndex * (itemWidth + gap) + itemWidth / 2;
  const translateX = containerWidth / 2 - activeCenterPosition;

  // Clamp translateX so track doesn't go out of bounds (optional)
  const maxTranslate = 0;
  const minTranslate = containerWidth - totalWidth;
  const clampedTranslateX = Math.min(maxTranslate, Math.max(minTranslate, translateX));

  track.style.transform = `translateX(${clampedTranslateX}px)`;
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  updateActive();
}

// Initialize
updateActive();
setInterval(autoSlide, 1500);

