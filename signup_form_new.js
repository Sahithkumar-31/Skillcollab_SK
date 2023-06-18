// Get references to the buttons and forms
const clickme1Button = document.querySelector('.form1bttn');
const clickme2Button = document.querySelector('.studentbttn');
const clickme3Button = document.querySelector('.organizationbttn');
const form1Form = document.querySelector('.form1');
const studentForm = document.querySelector('.student');
const organizationForm = document.querySelector('.organization');

const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close');
const newArticle = document.querySelector('.new-article');

// Add click event listeners to the buttons
clickme1Button.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission

  // Validate required fields in form1
  if (form1Form.checkValidity()) {
    const occupationSelect = document.querySelector('#occupation');
    const selectedOption = occupationSelect.options[occupationSelect.selectedIndex].value;

    if (selectedOption === 'employee') {
      form1Form.style.zIndex = '0';
      studentForm.style.zIndex = '0'; // Reset student form z-index
      organizationForm.style.zIndex = '1'; // Set organization form z-index higher
    } else {
      form1Form.style.zIndex = '0';
      studentForm.style.zIndex = '1'; // Set student form z-index higher
      organizationForm.style.zIndex = '0'; // Reset organization form z-index
    }
  } else {
    form1Form.reportValidity(); // Show validation messages
  }
});

clickme2Button.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission

  // Validate required fields in student form
  if (studentForm.checkValidity()) {
    form1Form.style.zIndex = '0';
    studentForm.style.zIndex = '1'; // Set student form z-index higher
    organizationForm.style.zIndex = '0'; // Reset organization form z-index
    openModal();
  } else {
    studentForm.reportValidity(); // Show validation messages
  }
});

clickme3Button.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission

  // Validate required fields in organization form
  if (organizationForm.checkValidity()) {
    form1Form.style.zIndex = '0';
    studentForm.style.zIndex = '0'; // Reset student form z-index
    organizationForm.style.zIndex = '1'; // Set organization form z-index higher
    openModal();
  } else {
    organizationForm.reportValidity(); // Show validation messages
  }
});

function openModal() {
  modal.style.display = 'block';
  // Add blur effect to the background
  //document.body.style.filter = 'blur(5px)';
}

function closeModal() {
  modal.style.display = 'none';
  // Remove blur effect from the background
  document.body.style.filter = 'none';
}

closeBtn.addEventListener('click', closeModal);

// You can populate the new article content dynamically here if needed
// Example:
newArticle.innerHTML = '<h2>New Article</h2><p>This is the new article content.</p>';
