// Smooth Scroll on Load
document.addEventListener("DOMContentLoaded", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


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