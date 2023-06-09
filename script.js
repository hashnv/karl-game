const karl = document.getElementById("karl");
const ricky = document.getElementById("ricky");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const startGameButton = document.getElementById("startGame");

const karl1 = document.getElementById("karl1");
const karl2 = document.getElementById("karl2");
const karl3 = document.getElementById("karl3");
const rickyLaugh = document.getElementById("rickyLaugh");

let score = 0;
let timeLeft = 30;

function moveRicky(event) {
    ricky.style.left = `${event.pageX}px`;
    ricky.style.top = `${event.pageY}px`;
    ricky.style.display = "block";
}

startGameButton.addEventListener("click", () => {
    karl.addEventListener("mouseover", () => {
        score++;
        scoreElement.textContent = score;
        moveKarl();
        playRandomVoiceLine();

        if (score % 10 === 0) {
            rickyLaugh.play();
        }
    });

    document.addEventListener("mousemove", moveRicky);

    // Add touch event listeners for mobile devices
    document.addEventListener("touchstart", (event) => {
        event.preventDefault();
        moveRicky(event.touches[0]);
    }, { passive: false });

    document.addEventListener("touchmove", (event) => {
        event.preventDefault();
        moveRicky(event.touches[0]);
    }, { passive: false });

    document.addEventListener("touchend", (event) => {
        event.preventDefault();
        ricky.style.display = "none";
    }, { passive: false });

    moveKarl();
    countdown();

    startGameButton.style.display = "none";
});

function moveKarl() {
    const x = Math.random() * (window.innerWidth - karl.clientWidth);
    const y = Math.random() * (window.innerHeight - karl.clientHeight);
    karl.style.left = `${x}px`;
    karl.style.top = `${y}px`;
}

function countdown() {
    if (timeLeft > 0) {
        timeLeft--;
        timeElement.textContent = timeLeft;
        setTimeout(countdown, 1000);
    } else {
        karl.removeEventListener("mouseover", moveKarl);
        alert(`Game Over! Your score is: ${score}`);
    }
}

// Add this function to play a random voice line
function playRandomVoiceLine() {
    const randomVoiceLine = Math.floor(Math.random() * 3) + 1;
    switch (randomVoiceLine) {
        case 1:
            karl1.play();
            break;
        case 2:
            karl2.play();
            break;
        case 3:
            karl3.play();
            break;
    }
}



