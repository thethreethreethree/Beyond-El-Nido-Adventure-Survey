const questions = [
    { question: "How interested are you in visiting Lio Beach to relax and enjoy refreshments?", options: ["Very interested", "Somewhat interested", "Not interested", "Other"], feedback: "Lio Beach has a serene vibe!" },
    { question: "What do you think about participating in a boodle fight lunch at Lamuro Farm?", options: ["Sounds like fun!", "I prefer a more formal meal", "Not interested", "Other"], feedback: "Boodle fights are a unique experience!" },
    { question: "Would you be interested in learning more about farm life while at Lamuro Farm?", options: ["Yes, I love learning about farms", "Maybe, depending on the activities", "Not really interested", "Other"], feedback: "Farm life has its own charm!" },
    { question: "How do you feel about a 30-minute hike to the Bulalacao Waterfalls?", options: ["Excited, sounds like a great adventure", "Fine, but I prefer a shorter hike", "Not interested in hiking", "Other"], feedback: "The waterfalls are worth the hike!" },
    { question: "Would you consider renting aqua shoes for the hike if needed?", options: ["Yes, I would rent them", "No, I’ll bring my own", "I don’t want to hike", "Other"], feedback: "Aqua shoes will keep your feet comfy!" },
    { question: "How do you feel about spending the afternoon at Nacpan Beach with a welcome drink at the Twin Beach Club?", options: ["It sounds relaxing and fun!", "I’d prefer more activities on the beach", "Not interested in the beach", "Other"], feedback: "Nacpan Beach is a tropical paradise!" },
    { question: "Would a welcome drink at the Twin Beach Club enhance your experience at Nacpan Beach?", options: ["Yes, it’s a great addition", "It’s okay, but not essential", "I don’t drink", "Other"], feedback: "Cheers to a great time at the beach!" },
    { question: "How do you feel about joining a karaoke session on the way back to town?", options: ["Sounds like a lot of fun!", "I’d prefer something quieter", "Not interested in karaoke", "Other"], feedback: "Sing your heart out!" },
    { question: "What would make this inland tour more enjoyable for you?", options: ["More activities", "Shorter stops", "Different types of food", "Other"], feedback: "Customization can make any trip perfect!" },
    { question: "What might prevent you from joining this inland tour?", options: ["Cost", "Duration", "Type of activities", "Other"], feedback: "Let us know how we can make it better!" }
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
        score += 10;
        document.getElementById('score').innerText = score;

        document.getElementById('feedback').innerText = questions[currentQuestionIndex].feedback;

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setTimeout(() => {
                document.getElementById('feedback').innerText = '';
                showQuestion(currentQuestionIndex);
            }, 1000);
        } else {
            endGame();
        }
    } else {
        alert('Please select an answer to proceed.');
    }
}

function endGame() {
    document.getElementById('questionContainer').innerHTML = `<h2>Congrats! You've completed the tour survey!</h2>`;
    document.getElementById('nextBtn').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    showQuestion(currentQuestionIndex);
});
