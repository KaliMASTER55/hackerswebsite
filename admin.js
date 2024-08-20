function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    // Dummy credentials for demonstration
    const adminUsername = "admin";
    const adminPassword = "password123";

    if (username === adminUsername && password === adminPassword) {
        // Redirect to admin panel
        window.location.href = "admin-panel.html";
        return false; // Prevent form submission
    } else {
        errorMsg.style.display = "block";
        errorMsg.textContent = "Invalid username or password!";
        return false;
    }
}