const questions = [
    { question: "What is your biggest concern about joining a jungle adventure?", options: ["Too remote", "Not enough comfort", "Scared of insects/animals", "Other"], feedback: "Exploring faraway lands isn't for everyone!" },
    { question: "How do you feel about spending a day in the wilderness?", options: ["Excited! Can't wait", "A little nervous", "Not my thing", "Other"], feedback: "The jungle awaits!" },
    { question: "What activities would make the jungle adventure more interesting for you?", options: ["Hiking and exploring", "Wildlife watching", "Local cultural experiences", "Other"], feedback: "Great choice for an adventure!" },
    { question: "What would make you reconsider joining the jungle adventure?", options: ["Lower price", "More luxury amenities", "Shorter trip duration", "Other"], feedback: "Customization is key!" },
    { question: "What type of group do you prefer for such adventures?", options: ["Small groups (4-6 people)", "Large groups (10+ people)", "Solo or with just a friend", "Other"], feedback: "Your preferences matter!" },
    { question: "How do you feel about camping during a jungle adventure?", options: ["Love it! It’s part of the fun", "I'd prefer a lodge or hotel", "Not a fan of camping", "Other"], feedback: "The jungle offers diverse experiences!" },
    { question: "Which part of a jungle adventure do you find least appealing?", options: ["Physical exertion (hiking, climbing)", "Lack of modern comforts", "Unpredictable weather", "Other"], feedback: "We'll find a balance!" },
    { question: "What do you think about the duration of the jungle adventure?", options: ["Perfect, one day is ideal", "Too short, I'd want more time", "Too long, I prefer a quick visit", "Other"], feedback: "Duration is flexible!" },
    { question: "What type of food would you prefer during a jungle adventure?", options: ["Local delicacies", "Comfort food I know", "Snacks and light meals", "Other"], feedback: "Great food choices!" },
    { question: "What would be the deciding factor in your choice to join or not join the adventure?", options: ["Cost of the trip", "Time commitment", "Level of adventure", "Other"], feedback: "It's important to know your priorities!" }
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
    document.getElementById('questionContainer').innerHTML = `<h2>Congrats, Explorer! You've completed the journey!</h2>`;
    document.getElementById('nextBtn').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    showQuestion(currentQuestionIndex);
});
