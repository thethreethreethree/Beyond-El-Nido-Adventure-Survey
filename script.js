const questions = [
    { question: "Why don't you want to join the jungle adventure?", options: ["Too far", "Too expensive", "Not adventurous enough", "Other"], feedback: "Exploring faraway lands isn't for everyone!" },
    { question: "What concerns you most about jungle adventures?", options: ["Insects", "Getting lost", "Weather", "Other"], feedback: "Fear not! The jungle has guides!" },
    { question: "How do you feel about roughing it?", options: ["Love it!", "Not for me", "Maybe", "Other"], feedback: "The jungle awaits the brave!" },
    // More fun questions...
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(index) {
    const questionContainer = document.getElementById('questionContainer');
    const questionData = questions[index];
    
    questionContainer.innerHTML = `
        <h2>${questionData.question}</h2>
        <ul>
            ${questionData.options.map((option, idx) => 
                `<li>
                    <input type="radio" name="answer" id="option${idx}" value="${option}">
                    <label for="option${idx}">${option}</label>
                </li>`
            ).join('')}
        </ul>
    `;
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        score += 10; // Add points for each answered question
        document.getElementById('score').innerText = score; // Update score display

        // Show feedback after answering
        document.getElementById('feedback').innerText = questions[currentQuestionIndex].feedback;

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setTimeout(() => {
                document.getElementById('feedback').innerText = ''; // Clear feedback
                showQuestion(currentQuestionIndex); // Show next question
            }, 1000); // Delay to give time for feedback
        } else {
            endGame();
        }
    } else {
        alert('Please select an answer to proceed.');
    }
}

function endGame() {
    document.getElementById('questionContainer').innerHTML = `<h2>Congrats, Explorer! You've completed the journey!</h2>`;
    document.getElementById('nextBtn').style.display = 'none'; // Hide the Next button
}

document.addEventListener('DOMContentLoaded', () => {
    showQuestion(currentQuestionIndex); // Start game
});
