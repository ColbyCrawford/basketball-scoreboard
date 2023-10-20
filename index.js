const scoreHomeEl = document.querySelector(".score-home")
const scoreGuestEl = document.querySelector(".score-guest")
const addOneBtns = document.querySelectorAll(".add-one-btn");
const addTwoBtns = document.querySelectorAll(".add-two-btn");
const addThreeBtns = document.querySelectorAll(".add-three-btn");
const scoreIncrementsHome = document.querySelector(".score-increments-home");

let guestScore;
let homeScore;

// Init
Array.from(scoreIncrementsHome.children).forEach((e) => {
    e.setAttribute("data-home", "true");
})

if (!homeScore && !guestScore) {
    guestScore = 0;
    homeScore = 0;
    renderScores(homeScore, guestScore);
}

// Functions
function renderScores(score0ne, scoreTwo) {
    scoreHomeEl.textContent = score0ne
    scoreGuestEl.textContent = scoreTwo
    scoreLeader()
}

function updateScore(isHome, increment) {
    if (isHome) {
        homeScore += increment
    } else {
        guestScore += increment
    }
    renderScores(homeScore, guestScore)
}

function scoreLeader() {
    if (homeScore > guestScore) {
        scoreHomeEl.parentElement.setAttribute("data-leader", "true")
        if (scoreGuestEl.parentElement.hasAttribute("data-leader")) {
            scoreGuestEl.parentElement.removeAttribute("data-leader")
        }
    } else if (homeScore < guestScore) {
        scoreGuestEl.parentElement.setAttribute("data-leader", "true")
        if (scoreHomeEl.parentElement.hasAttribute("data-leader")) {
            scoreHomeEl.parentElement.removeAttribute("data-leader")
        }
    } 
}

// Button Event Listeners
Array.from(addOneBtns).forEach((e) => {
    e.addEventListener("click", () => {
       updateScore(e.getAttribute("data-home"), 1)
    })
})
Array.from(addTwoBtns).forEach((e) => {
    e.addEventListener("click", () => {
        updateScore(e.getAttribute("data-home"), 2)
    })
})
Array.from(addThreeBtns).forEach((e) => {
    e.addEventListener("click", () => {
        updateScore(e.getAttribute("data-home"), 3)
    })
})
