//TODO

document.addEventListener('DOMContentLoaded', function() {
  // Function to toggle visibility of job & code fields based on the selected reason
  const toggleFields = () => {
    const reason = document.getElementById("reason");
    const jobFields = document.getElementById("jobFields");
    const codeFields = document.getElementById("codeFields");

    // Toggles visibility based on the selected reason
    jobFields.classList.toggle("hidden", reason.value !== "jobOpportunity");
    codeFields.classList.toggle("hidden", reason.value !== "talkCode");
  };

  // Event listener for form submission
  document.getElementById("contactForm").addEventListener("submit", (event) => {
    // Function to validate a form field and display the error message if invalid
    const validateField = (input, error, condition, errorMessage) => {
      error.textContent = "";
      if (!condition(input.value.trim())) {
        error.textContent = errorMessage;
        event.preventDefault();
      }
    };

    // Validate the Name field
    validateField(
      document.getElementById("name"),
      document.getElementById("nameError"),
      (value) => value.length >= 3,
      "Name is required and must be 3 or more characters."
    );

    // Validate the Email field
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailRegex = /\w+@\w+\.\w+/;

    validateField(
      emailInput,
      emailError,
      (value) => emailRegex.test(value),
      "Email is required and must be in the format user@example.com."
    );

    validateField(
      emailInput,
      emailError,
      () => emailInput.checkValidity(),
      "Email is required and must be in the format user@example.com."
    );

    // Validate the Message field
    validateField(
      document.getElementById("message"),
      document.getElementById("messageError"),
      (value) => value.length >= 10,
      "Message is required and must be 10 or more characters."
    );

    // Validate coding language selection
    const codingLanguageSelect = document.getElementById("codingLanguage");
    const codingLanguageError = document.getElementById("codingLanguageError");

    validateField(
      codingLanguageSelect,
      codingLanguageError,
      (value) => value !== "Choose One",
      "Please choose a coding language."
    );
  });

  // event listener for the reason dropdown change
  document.getElementById("reason").addEventListener("change", toggleFields);

  // call to toggleFields to ensure correct initial visibility
  toggleFields();
});
