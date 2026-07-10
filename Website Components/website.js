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


    const userDisplay = document.getElementById("user-display");
    const savedName = localStorage.getItem("currentUsername");

    if (savedName && userDisplay) {
        userDisplay.textContent = savedName;
    }
});