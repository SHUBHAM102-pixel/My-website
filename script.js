// Navbar Scroll Effect
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
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


// JavaScript (Optional) - Dynamic Speed Control
document.addEventListener("DOMContentLoaded", function() {
    let slider = document.querySelector(".slider");
    slider.addEventListener("mouseover", function() {
        slider.style.animationPlayState = "paused";
    });
    slider.addEventListener("mouseout", function() {
        slider.style.animationPlayState = "running";
    });
});

/*image slider*/

document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".box .slide");
    let currentIndex = 0;
    let totalSlides = slides.length;
    let slideContainer = document.querySelector(".box");

    if (totalSlides === 0) {
        console.error("No slides found! Make sure your HTML has images with class 'slide'.");
        return;
    }

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;  // Loop back to first slide
        } else if (index < 0) {
            currentIndex = totalSlides - 1;  // Loop back to last slide
        } else {
            currentIndex = index;
        }

        // Slide effect
        slideContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    // Next and Prev Buttons
    document.querySelector(".next").addEventListener("click", function () {
        showSlide(currentIndex + 1);
    });

    document.querySelector(".prev").addEventListener("click", function () {
        showSlide(currentIndex - 1);
    });

    // Auto-slide every 3 seconds
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
});




/* reservation form*/

document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let guests = document.getElementById('guests').value;

    if (name === '' || email === '' || date === '' || time === '' || guests === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Reservation Successful! 🎉');
        this.reset(); // Reset form after submission
    }
});



document.getElementById("call").addEventListener("click", function() {
    window.location.href = "tel:+917084237626";
});