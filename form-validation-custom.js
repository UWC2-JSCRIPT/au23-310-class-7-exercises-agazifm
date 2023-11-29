// TODO
// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    // Reset styles and messages
    clearValidation();
  
    // Check First Name
    const firstName = document.getElementById('name').value;
    if (firstName.length < 3) {
      setInvalid('name', 'First Name is required and must be 3 or more characters', 'nameError');
    } else {
      removeInvalid('name');
    }
  
    // Check Last Name
    // Assuming 'name' is a combination of first and last name
    const lastName = ''; // If you have a separate last name field, use its value here
    if (lastName.length < 3) {
      setInvalid('name', 'Last Name is required and must be 3 or more characters', 'nameError');
    } else {
      removeInvalid('name');
    }
  
    // Check Email
    const email = document.getElementById('email').value;
    const emailRegex = /\w+@\w+\.\w+/;
    if (!emailRegex.test(email)) {
      setInvalid('email', 'Email is required and must be in the format user@example.com', 'emailError');
    } else {
      removeInvalid('email');
    }
  
    // Prevent form submission if any field is invalid
    if (document.querySelectorAll('.invalid').length > 0) {
      event.preventDefault();
      console.log('Bad input');
    }
  });
  
  // Function to remove invalid class and clear error message
  function removeInvalid(id) {
    const element = document.getElementById(id);
    const errorElement = document.getElementById(id + 'Error');
    element.classList.remove('invalid');
    errorElement.textContent = '';
    errorElement.style.display = 'none';
  }