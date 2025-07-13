// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the page from reloading

      // Get form values
      const name = form.querySelector("input[type='text']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const message = form.querySelector("textarea").value.trim();

      // Simple validation
      if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        return;
      }

      // Simulate form submission
      alert(`Thank you, ${name}! Your message has been sent.`);

      // Reset the form fields
      form.reset();
    });
  }
});
