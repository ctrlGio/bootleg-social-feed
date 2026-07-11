document.addEventListener("DOMContentLoaded", () => {
    const loginform = document.getElementById("login-form");

    if (loginform) {
        loginform.addEventListener("submit", (event) => {
            event.preventDefault();

            const usernameInput = document.getElementById("name").value.trim();
            const passwordInput = document.getElementById("password").value;

            if (!usernameInput || !passwordInput) {
                alert("Please fill out both fields");
                return;
            }
            localStorage.setItem("currentUsername", usernameInput);

            window.location.href = "homepage.html";
        });
    }

    const loggedInUser = localStorage.getItem("currentUsername") || "Guest User";

    const navbarDisplay = document.getElementById("user-display");
    if (navbarDisplay) {
        navbarDisplay.textContent = loggedInUser;
    }

    const profileHeading = document.getElementById("main-user-heading");
    if (profileHeading) {
        profileHeading.textContent = loggedInUser;
    }

    const namePlaceholders = document.querySelectorAll(".name-placeholder");
    namePlaceholders.forEach(element => {
        element.textContent = loggedInUser;
    });
});