document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Error message elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    // Validate name
    if (!name) {
      nameError.textContent = "Name is required.";
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      emailError.textContent = "Enter a valid email address.";
      isValid = false;
    }

    // Validate message
    if (!message) {
      messageError.textContent = "Message is required.";
      isValid = false;
    }

    // If all inputs are valid
    if (isValid) {
      alert("Thank you for contacting us!");
      form.reset(); // Reset the form
    }
  });
});
