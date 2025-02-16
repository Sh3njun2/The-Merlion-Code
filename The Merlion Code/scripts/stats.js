var loader = document.getElementById("loading-wrapper");
window.onload = () => {
    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = 'none';
        }, 4500);
    }, 4500)
}



document.addEventListener("DOMContentLoaded", () => {
    // Retrieve quiz results
    let quizResults = JSON.parse(localStorage.getItem("quizResults")) || {};
    let { score, timeElapsed, accuracy, stars } = quizResults;

    // Retrieve saved high scores and star count
    let highScoreNG = Number(localStorage.getItem("highScoreNG")) || 0;
    let starCountNG = localStorage.getItem("starCountNG") || "0"; // Keep as string
    let maneRetrieved = localStorage.getItem("maneRetrieved") === "true"; // Convert to boolean

    // Update stars if higher than previous best
    if (parseInt(stars) > parseInt(starCountNG)) {
        localStorage.setItem("starCountNG", stars);
        starCountNG = stars; // Update variable to reflect change
    }

    // Update high score if current score is higher
    if (score > highScoreNG) {
        localStorage.setItem("highScoreNG", score);
        highScoreNG = score; // Update variable to reflect change
    }

    // Set maneRetrieved to true if score exceeds threshold (e.g., 4000)
    if (score >= 4000 && !maneRetrieved) {
        localStorage.setItem("maneRetrieved", "true");
        maneRetrieved = true;
    }

    let isManeDisplayed = localStorage.getItem("maneRetrieved") === "true";

    const maneElement = document.querySelector("#Retrieved");
    const maneMsg = document.querySelector("#mane-retrieved-msg")
  
    maneElement.src = isManeDisplayed ? "assets/mane-retrieved.png" : "assets/mane-not-retrieved.png";
    maneMsg.style.display = isManeDisplayed ? "block" : "none;"

    // Update star image based on stars earned
    let starImage = document.getElementById("NGstarCount");
    if (starImage) {
        starImage.src = `assets/${stars}stars.svg`;
    }

    // Format timeElapsed (convert to minutes and seconds)
    let minutes = Math.floor(timeElapsed / 60);
    let seconds = timeElapsed % 60;
    let formattedTime = `${minutes}m ${seconds}s`;

    document.getElementById("score").innerText = `${score}`;
    document.getElementById("timeElapsed").innerText = `${formattedTime}`;
    document.getElementById("accuracy").innerText = `${accuracy}%`;

});