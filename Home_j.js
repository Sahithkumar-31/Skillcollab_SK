// Get the necessary elements
const getInButtons = document.querySelectorAll('.getinbttn');
const popupOverlay = document.querySelector('.popup-overlay');
const closeBtn = document.querySelector('.close-btn');

// Add event listener to each "Get in" button
getInButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Show the popup overlay
    popupOverlay.style.display = 'block';
  });
});

// Add event listener to the close button
closeBtn.addEventListener('click', () => {
  // Hide the popup overlay
  popupOverlay.style.display = 'none';
});
