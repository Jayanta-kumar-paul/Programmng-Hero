document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload
        alert("Registration Successful!");
        form.reset(); // Clear form after submission
    });

    document.querySelector(".close-btn").addEventListener("click", function () {
        document.querySelector(".registration-box").style.display = "none";
    });
});