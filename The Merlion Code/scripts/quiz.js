

let timeLeft = 90; // Timer duration in seconds
const timerBar = document.getElementById("timer-bar");
const totalTime = timeLeft; // Store original time for percentage calculation

const timerInterval = setInterval(() => {
    timeLeft--;
    let percentage = (timeLeft / totalTime) * 100;
    timerBar.style.width = percentage + "%";

    // Change color based on remaining time
    if (percentage <= 20) {
        timerBar.style.backgroundColor = "#B0302C"; // Critical: Red
    } else if (percentage <= 50) {
        timerBar.style.backgroundColor = "#FFC72C"; // Warning: Yellow
    } else {
        timerBar.style.backgroundColor = "#00856A"; // Safe: Green
    }

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerBar.style.width = "0%"; // Ensures it reaches zero
        endQuiz(); // Call game-over function
    }
}, 1000);


const questionPool = {
    easy: [
        { question: "What was the National Gallery of Singapore originally used for?", options: ["A shopping mall", "A royal palace", "A train station", "A colonial government building"], answer: "A colonial government building" },
        { question: "Which two historic buildings make up the National Gallery?", options: ["Parliament House and Old Fire Station", "Victoria Theatre and Empress Place", "City Hall and Supreme Court", "Raffles Hotel and Asian Civilisations Museum"], answer: "City Hall and Supreme Court" },
        { question: "What is the primary focus of the National Gallery’s art collection?", options: ["Southeast Asian art", "Renaissance paintings", "European sculptures", "Modern Japanese calligraphy"], answer: "Southeast Asian art" },
        { question: "Which famous declaration was signed at the City Hall Chamber in 1959?", options: ["Singapore’s independence from Malaysia", "The Singapore Constitution", "The formation of the Republic of Singapore", "The Treaty of Friendship with Britain"], answer: "The Singapore Constitution" },
        { question: "The National Gallery is home to which famous painting by Georgette Chen?", options: ["Drying Salted Fish", "The Marketplace", "Singapore River Scene", "Sunset in Bali"], answer: "Drying Salted Fish" },
        { question: "What architectural feature of the Supreme Court building still remains in the gallery today?", options: ["A large glass dome", "An underground prison", "A bell tower", "A central courtroom with original woodwork"], answer: "A central courtroom with original woodwork" },
        { question: "What year was the National Gallery Singapore officially opened?", options: ["2005", "2010", "2015", "2020"], answer: "2015" },
        { question: "Which MRT station is closest to the National Gallery Singapore?", options: ["City Hall", "Bugis", "Orchard", "Raffles Place"], answer: "City Hall" },
        { question: "What was the purpose of the City Hall building before it became part of the National Gallery?", options: ["A concert hall", "A courthouse", "A government office", "A hotel"], answer: "A government office" },
        { question: "What iconic sculpture can be found near the entrance of the National Gallery Singapore?", options: ["The Thinker", "The Bird by Fernando Botero", "Merlion", "The Awakening"], answer: "The Bird by Fernando Botero" }
    ],
    medium: [
        { question: "What material is used in the design of the National Gallery’s link bridges", options: ["Concrete", "Wooden beams", "Steel and glass", "Brick and marble"], answer: "Steel and glass" },
        { question: "Which of the following art movements is represented in the National Gallery’s collection?", options: ["Italian Futurism", "Southeast Asian Modernism", "French Impressionism", "Japanese Ukiyo-e"], answer: "Southeast Asian Modernism" },
        { question: "What was the National Gallery Singapore originally used for?", options: ["The opening of the first National Museum", "The first public election", "The signing of the Japanese surrender", "The opening of the Raffles Hotel"], answer: "The signing of the Japanese surrender" },
        { question: "How many floors does the National Gallery Singapore have?", options: ["3", "5", "7", "9"], answer: "5" },
        { question: "Which country helped fund the restoration of the Supreme Court building as part of the National Gallery project?", options: ["France", "China", "Japan", "The United States"], answer: "France" },
        { question: "Which notable Southeast Asian artist’s works are prominently featured in the National Gallery?", options: ["Affandi", "Hokusai", "Frida Kahlo", "Banksy"], answer: "Affandi" },
        { question: "What is the name of the rooftop space at the National Gallery offering panoramic views of the city?", options: ["Sky Deck", "Padang Atrium", "The Rooftop Garden", "National Terrace"], answer: "The Rooftop Garden" },
        { question: "The National Gallery’s ‘DBS Singapore Gallery’ primarily focuses on art from which country?", options: ["Malaysia", "Thailand", "Indonesia", "Singapore"], answer: "Singapore" }
    ],
    hard: [
        { question: "What is the total floor area of the National Gallery Singapore?", options: ["50,000 sqm", "64,000 sqm", "72,000 sqm", "85,000 sqm"], answer: "64,000 sqm" },
        { question: "What unique preservation technique was used to protect the old Supreme Court’s foundation?", options: ["Underground reinforcement and isolation", "Laser scanning and 3D mapping", "Full building relocation", "Carbon fiber strengthening"], answer: "Underground reinforcement and isolation" },
        { question: "Which of these renowned artists has had a solo exhibition at the National Gallery Singapore?", options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Yayoi Kusama"], answer: "Yayoi Kusama" },
        { question: "How was the National Gallery’s restoration project funded?", options: ["100% government funding", "Entry ticket sales before construction", "UNESCO heritage funding", "Private donations & government grants"], answer: "Private donations & government grants" },
        { question: "Which international award did the National Gallery Singapore win for its architectural conservation?", options: ["UNESCO Asia-Pacific Heritage Award", "Pritzker Architecture Prize", "RIBA International Award", "Aga Khan Award for Architecture"], answer: "UNESCO Asia-Pacific Heritage Award" },
        { question: "What innovative lighting technique is used in the Gallery to preserve delicate artworks?", options: ["UV-blocking glass and controlled LED lighting", "Infrared heating", "Fluorescent tube lighting", "Natural skylight exposure"], answer: "UV-blocking glass and controlled LED lighting" },
        { question: "What is the name of the digital platform that allows visitors to explore the Gallery’s collection online?", options: ["National Art View", "Gallery Explorer", "Art InSight", "Google Arts & Culture"], answer: "Gallery Explorer" },
        { question: "Which famous courtroom within the National Gallery was used for significant war crime trials?", options: ["Supreme Court Chamber", "City Hall Chamber", "Judiciary Room", "Padang Court"], answer: "Supreme Court Chamber" }
    ]
};

let questions = [];
let currentIndex = 0;
let score = 0;
let correctAnswers = 0;
let totalQuestions = 15;

function startQuiz() {
    questions = [
        ...shuffle(questionPool.easy).slice(0, 6),
        ...shuffle(questionPool.medium).slice(0, 5),
        ...shuffle(questionPool.hard).slice(0, 4)
    ];
    

    currentIndex = 0;
    score = 0;
    correctAnswers = 0;

    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentIndex];
    document.getElementById("question-number").innerText = `QUESTION ${currentIndex + 1}`;
    document.getElementById("question").innerText = currentQuestion.question;
    document.getElementById("answer-buttons").innerHTML = "";

    let shuffledOptions = [...currentQuestion.options]; // Clone the options array
    shuffledOptions.sort(() => Math.random() - 0.5); // Shuffle the options

    shuffledOptions.forEach((option) => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("light-button", "dm-sans-med");
        btn.onclick = () => selectAnswer(option);
        document.getElementById("answer-buttons").appendChild(btn);
    });
}


function selectAnswer(selected) {
    let correct = questions[currentIndex].answer;
    let buttons = document.querySelectorAll(".light-button");
    
    buttons.forEach((btn) => {
        btn.classList.remove("hover-effect"); // Remove hover effect on all buttons
    
        if (btn.innerText === correct) {
            btn.classList.add("clicked"); // Mark correct answer as green
        } else {
            btn.classList.add("clicked", "wrong"); // Mark incorrect answers as red
        }
    
        // Prevent hover effect after selection
        btn.addEventListener("mouseenter", () => btn.classList.remove("hover-effect"));
        btn.addEventListener("mouseleave", () => btn.classList.remove("hover-effect"));
    });
    
    let timeTaken = 90 - timeLeft; // Calculate time taken to answer
    let speedMultiplier = 1; // Default multiplier
    
    if (timeTaken <= 2) {
        speedMultiplier = 1.5; // Fastest response
    } else if (timeTaken <= 5) {
        speedMultiplier = 1.2; // Medium speed
    }
    
    if (selected === correct) {
        score += Math.round(300 * speedMultiplier); // Apply multiplier
        correctAnswers++;
    } else {
        score += 100; // Award some points for participation
    }
    

    setTimeout(() => {
        if (++currentIndex < totalQuestions) {
            showQuestion();
        } else {
            endQuiz();
        }
    }, 1000);
}

// Ends quiz when the timer runs out
function checkTime() {
    if (timeLeft <= 0) {
        endQuiz();
    }
}

// Call this function wherever needed (e.g., after answering a question)
function updateTimerBar() {
    let timerBar = document.getElementById("timer-bar");
    let timePercentage = (timeLeft / totalTime) * 100;
    timerBar.style.width = timePercentage + "%";
}

function endQuiz() {
    clearInterval(timerInterval);

    // Save results in localStorage
    let quizResults = {
        score: score,
        timeElapsed: 90 - timeLeft,
        accuracy: ((correctAnswers / totalQuestions) * 100).toFixed(2),
        stars: calculateStars(score),
    };

    localStorage.setItem("quizResults", JSON.stringify(quizResults));

    // Track attempts
    let attempts = localStorage.getItem("quizAttempts") || 0;
    localStorage.setItem("quizAttempts", Number(attempts) + 1);

    // Redirect to results page
    window.location.href = "stats.html";

}

// Calculate stars based on score
function calculateStars(score) {
    if (score >= 4500) return "3"; // Perfect run (all correct + fast speed)
    if (score >= 3000) return "2"; // Most correct + decent speed
    if (score >= 1500) return "1"; // Half correct or slow
    return "0"; // Too many mistakes
}


function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

startQuiz();

