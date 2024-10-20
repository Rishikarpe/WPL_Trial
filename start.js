window.onload = function() {
    // Wait for 3 seconds, then hide the popup banner and show the main content
    setTimeout(function() {
        document.getElementById("popup-banner").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");
    }, 3000); // 3000ms = 3 seconds
};
