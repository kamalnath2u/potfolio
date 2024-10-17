document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const formResponse = document.getElementById("formResponse");
    formResponse.classList.remove("hidden");
    formResponse.innerText = "Thank you for your message! I will get back to you soon.";
    
    // Optionally, you can reset the form
    this.reset();
});
