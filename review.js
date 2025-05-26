// Submit Review Form
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    let reviewContainer = document.querySelector('.review-container');
    let newReview = document.createElement('div');
    newReview.classList.add('review');
    newReview.innerHTML = `<p>"${message}"</p><h4>- ${name}</h4>`;

    reviewContainer.appendChild(newReview);
    alert('Review Submitted Successfully! 🎉');

    this.reset();
});


//dark and light mode
document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check if Dark Mode is saved in Local Storage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        themeToggle.innerHTML = `<i class="fas fa-moon"></i>`; // Moon Icon for Dark Mode
    }

    // Toggle Theme on Button Click
    themeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");

        // Save Theme Preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            themeToggle.innerHTML = `<i class="fas fa-moon"></i>`; // Moon Icon
        } else {
            localStorage.setItem("dark-mode", "disabled");
            themeToggle.innerHTML = `<i class="fas fa-sun"></i>`; // Sun Icon
        }
    });
});
// Sticky Navbar Scroll Effect
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar .classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});