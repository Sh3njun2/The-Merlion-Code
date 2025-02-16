

document.addEventListener("DOMContentLoaded", function () {
    const startQuizLink = document.getElementById("start-quiz");
    const countdownOverlay = document.getElementById("countdown-overlay");
    const countdownText = document.getElementById("countdown-text");

    startQuizLink.addEventListener("click", function (event) {
        event.preventDefault(); // Stop immediate redirection
    
        let countdown = 3;
        countdownText.textContent = countdown;
        countdownOverlay.style.display = 'flex';
    
        const countdownInterval = setInterval(() => {
            countdown--;
            if (countdown > 0) {
                countdownText.textContent = countdown;
            } else {
                clearInterval(countdownInterval);
                
                setTimeout(() => {
                    window.location.href = startQuizLink.href;
                }, 0);
            }
        }, 1000); // Run every second
    });
    
});

var loader = document.getElementById("loading-wrapper");
window.onload = () => {
    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = 'none';
        }, 4500);
    }, 4500)
}

