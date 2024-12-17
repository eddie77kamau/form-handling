document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");
    const summaryContent = document.getElementById("summaryContent");
  
    // Error span elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const contactMethodError = document.getElementById("contactMethodError");
    const termsError = document.getElementById("termsError");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form from submitting normally
      const formData = new FormData(form);
  
      // Form field values
      const name = formData.get("name").trim();
      const email = formData.get("email").trim();
      const contactMethod = formData.get("contactMethod");
      const termsAccepted = formData.get("terms") === "on";
  
      // Validation
      let isValid = true;
      if (!name) {
        nameError.textContent = "Name is required.";
        isValid = false;
      } else {
        nameError.textContent = "";
      }
  
      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = "Valid email is required.";
        isValid = false;
      } else {
        emailError.textContent = "";
      }
  
      if (!contactMethod) {
        contactMethodError.textContent = "Please select a contact method.";
        isValid = false;
      } else {
        contactMethodError.textContent = "";
      }
  
      if (!termsAccepted) {
        termsError.textContent = "You must accept the terms and conditions.";
        isValid = false;
      } else {
        termsError.textContent = "";
      }
  
      // If form is valid, display summary
      if (isValid) {
        const dataObject = {
          name,
          email,
          contactMethod,
          termsAccepted: termsAccepted ? "Yes" : "No",
        };
  
        updateSummary(dataObject);
        alert("Form submitted successfully!");
      }
    });
  
    // Real-time email validation feedback
    const emailField = document.getElementById("email");
    emailField.addEventListener("input", () => {
      if (!/^\S+@\S+\.\S+$/.test(emailField.value)) {
        emailError.textContent = "Invalid email format.";
      } else {
        emailError.textContent = "";
      }
    });
  
    // Function to update the form summary
    function updateSummary(data) {
      summaryContent.innerHTML = `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Preferred Contact Method:</strong> ${data.contactMethod}</p>
        <p><strong>Accepted Terms:</strong> ${data.termsAccepted}</p>
      `;
    }
  });
  