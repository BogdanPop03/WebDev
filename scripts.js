// Change main div content
function changeContent(sectionId) {
    // Hide all content sections
    var contentSections = document.getElementsByClassName("content");
    for (var i = 0; i < contentSections.length; i++) {
        contentSections[i].classList.remove("active");
    }

    // Show selected content section
    var selectedSection = document.getElementById("content-" + sectionId);
    selectedSection.classList.add("active");
}

// Send Email
const contactForm = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");
const errorMessage = document.getElementById("error-message");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form field values
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Check if form is valid (e.g., all fields are filled)
    if (firstName && lastName && email && message) {
        // Compose email subject and content
        const subject = firstName + " " + lastName + " command";
        const emailContent = "From: " + email + "\n\n" + message;

        // Send email to hardcoded address (replace with your email address)
        const recipientEmail = "milkandcattlefarm@gmail.com";
        window.open("mailto:" + recipientEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(emailContent));

        // Reset form fields
        contactForm.reset();

        // Show success message
        successMessage.classList.remove("hidden");
        errorMessage.classList.add("hidden");
    } else {
        // Show error message
        errorMessage.textContent = "Please fill out all fields.";
        errorMessage.classList.remove("hidden");
        successMessage.classList.add("hidden");
    }
});
