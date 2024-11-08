// Get all feature items
const featureItems = document.querySelectorAll('.feature-item');

featureItems.forEach(item => {
    const video = item.querySelector('.spark-animation');

    // Play the video on mouse enter
    item.addEventListener('mouseenter', () => {
        video.style.display = 'block'; // Ensure the video is visible
        video.play();
    });

    // Pause the video on mouse leave
    item.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Reset video to start when not hovering
        video.style.display = 'none'; // Hide the video when not hovering
    });
});

function openLoginForm() {
    document.getElementById("loginForm").style.display = "block";
}

function closeLoginForm() {
    document.getElementById("loginForm").style.display = "none";
}

function toggleMenu() {
    var navbar = document.querySelector(".navbar-container");
    navbar.classList.toggle("active");
}

function showLoginMessage() {
    alert("Hello Dear Mampfi, there is no Login yet, why would it? What may be there? Stay tuned!");
}