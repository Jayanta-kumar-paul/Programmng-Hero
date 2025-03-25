// This script is optional and can be used to add functionality such as changing lights
document.addEventListener("DOMContentLoaded", function() {
    let lights = document.querySelectorAll(".light");
    let index = 0;

    setInterval(() => {
        lights.forEach(light => light.style.opacity = 0.3);
        lights[index].style.opacity = 1;
        index = (index + 1) % 3;
    }, 1000);
});