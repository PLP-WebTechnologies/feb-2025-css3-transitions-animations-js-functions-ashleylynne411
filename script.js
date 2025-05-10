// Store user input in localStorage
document.getElementById("userInput").addEventListener("input", function() {
    localStorage.setItem("username", this.value);
});

// Retrieve user data on page load
window.onload = function() {
    let savedName = localStorage.getItem("username");
    if (savedName) {
        document.getElementById("message").textContent = "Welcome back, " + savedName + "!";
    }
};

// Trigger animation when button is clicked
document.getElementById("changeBtn").addEventListener("click", function() {
    let img = document.getElementById("animatedImage");
    img.style.animation = "fadeIn 2s ease-in-out";
    img.src = "https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"; // Change image
});
