

function showNGPopUp() {
    const NGpopup = document.querySelector('#NG-popup');
    const overlay = document.querySelector('#popup-overlay');
    NGpopup.style.display = 'flex';
    overlay.style.display = 'flex';
}

function hideNGPopUp() {
    const NGpopup = document.querySelector('#NG-popup');
    const overlay = document.querySelector('#popup-overlay');
    NGpopup.style.display = 'none';
    overlay.style.display = 'none';
}



// Function to scale the elements based on the viewport width
function scaleElements() {
    const width = window.innerWidth; // Get the current viewport width
    const scaleFactor = Math.min(1, 980 / width); // Calculate the scale factor based on 980px width
    
    // Apply scaling only when width is below 980px
    if (width <= 980) {
        document.querySelectorAll('.singapore .overlap-group').forEach(function(element) {
        element.style.transform = `scale(${scaleFactor})`;
        element.style.transformOrigin = 'center center'; // Keep the scale starting from top left
        });
    } else {
        // Reset scale if the screen width is larger than 980px
        document.querySelectorAll('.singapore .overlap-group').forEach(function(element) {
        element.style.transform = 'scale(1)';
        });
    }
    }
    
    // Call the function to apply scaling on load and resize
    window.addEventListener('load', scaleElements);
    window.addEventListener('resize', scaleElements); // Recalculate on window resize




if (localStorage.getItem("starCountNG") === null) {
    localStorage.setItem("starCountNG", "0");
}

let starsNGDisplayed = localStorage.getItem("starCountNG");

const starsElement = document.getElementById("NGstarcount");

const imageMap = {
    "0": "assets/0stars.svg",
    "1": "assets/1stars.svg",
    "2": "assets/2stars.svg",
    "3": "assets/3stars.svg"
};

// Set the image based on the stored value
starsElement.src = imageMap[starsNGDisplayed] || "assets/0stars.svg"; // Fallback to a default image





if (localStorage.getItem("attemptsNG") === null) {
    localStorage.setItem("attemptsNG", 0);
  }

let attemptCountNG = localStorage.getItem("attemptsNG")
document.getElementById("attemptCountNG").textContent = attemptCountNG

if (localStorage.getItem("highScoreNG") === null) {
    localStorage.setItem("highScoreNG", 0);
}

let highScoreNGDisplayed = localStorage.getItem("highScoreNG")
document.getElementById("highScoreNG").textContent = highScoreNGDisplayed



if (localStorage.getItem("maneRetrieved") === null) {
    localStorage.setItem("maneRetrieved", "false");
  }

  let isManeDisplayed = localStorage.getItem("maneRetrieved") === "true";

  const maneElement = document.querySelector("#mane");

  maneElement.src = isManeDisplayed ? "assets/mane_alive.png" : "assets/mane_grey.png";



var loader = document.getElementById("loading-wrapper");
window.onload = () => {
    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = 'none';
        }, 4500);
    }, 4500)
}