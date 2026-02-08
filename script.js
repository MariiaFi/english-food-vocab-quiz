// Vocabulary Data
const vocabulary = {
    basicFoods: ['bread', 'rice', 'pasta', 'cheese', 'egg', 'meat', 'fish', 'soup'],
    fruits: ['apple', 'banana', 'orange', 'strawberry', 'grape', 'watermelon', 'pineapple'],
    vegetables: ['carrot', 'tomato', 'potato', 'onion', 'salad', 'broccoli', 'mushroom'],
    sweetsDrinks: ['cake', 'chocolate', 'ice cream', 'juice', 'coffee', 'tea', 'water']
};

// Quiz Questions Data
const quizQuestions = [
    // Category 1: Choose the right word
    {
        question: "Which word means a sweet baked dessert?",
        options: ["apple", "cake", "rice", "meat"],
        correctIndex: 1,
        type: "choose"
    },
    {
        question: "What do you drink in the morning to wake up?",
        options: ["juice", "water", "coffee", "soup"],
        correctIndex: 2,
        type: "choose"
    },
    {
        question: "Which food is yellow and curved?",
        options: ["carrot", "banana", "tomato", "cheese"],
        correctIndex: 1,
        type: "choose"
    },
    {
        question: "Which word is a type of meat from the sea?",
        options: ["chicken", "fish", "egg", "bread"],
        correctIndex: 1,
        type: "choose"
    },
    {
        question: "What do you make sandwiches with?",
        options: ["rice", "pasta", "bread", "potato"],
        correctIndex: 2,
        type: "choose"
    },
    {
        question: "Which is a hot liquid food?",
        options: ["ice cream", "soup", "cheese", "cake"],
        correctIndex: 1,
        type: "choose"
    },
    {
        question: "What is a small, red fruit often eaten in summer?",
        options: ["apple", "orange", "strawberry", "grape"],
        correctIndex: 2,
        type: "choose"
    },
    {
        question: "Which food comes from a cow and is used on pizza?",
        options: ["meat", "egg", "cheese", "fish"],
        correctIndex: 2,
        type: "choose"
    },
    
    // Category 2: What doesn't belong
    {
        question: "Which word does NOT belong with the others?",
        options: ["apple", "banana", "orange", "carrot"],
        correctIndex: 3,
        type: "category"
    },
    {
        question: "Which is NOT a drink?",
        options: ["juice", "coffee", "tea", "chocolate"],
        correctIndex: 3,
        type: "category"
    },
    {
        question: "Which is NOT a vegetable?",
        options: ["tomato", "potato", "broccoli", "watermelon"],
        correctIndex: 3,
        type: "category"
    },
    {
        question: "Which is NOT sweet?",
        options: ["cake", "chocolate", "ice cream", "rice"],
        correctIndex: 3,
        type: "category"
    },
    {
        question: "Which is NOT typically eaten for breakfast?",
        options: ["bread", "egg", "coffee", "soup"],
        correctIndex: 3,
        type: "category"
    },
    {
        question: "Which is NOT a fruit?",
        options: ["grape", "pineapple", "strawberry", "mushroom"],
        correctIndex: 3,
        type: "category"
    },
    
    // Category 3: Word in context
    {
        question: "I'm thirsty. I want some ______.",
        options: ["bread", "water", "meat", "cheese"],
        correctIndex: 1,
        type: "context"
    },
    {
        question: "For dinner, we had ______ with vegetables.",
        options: ["juice", "chocolate", "fish", "ice cream"],
        correctIndex: 2,
        type: "context"
    },
    {
        question: "My favorite fruit is ______. It's red and crunchy.",
        options: ["banana", "orange", "apple", "grape"],
        correctIndex: 2,
        type: "context"
    },
    {
        question: "It's hot outside. Let's have some ______.",
        options: ["soup", "coffee", "ice cream", "rice"],
        correctIndex: 2,
        type: "context"
    },
    {
        question: "I need energy. I'll eat a ______.",
        options: ["water", "banana", "tea", "soup"],
        correctIndex: 1,
        type: "context"
    },
    {
        question: "We put ______ in our salad: lettuce, tomatoes, and cucumbers.",
        options: ["salad", "juice", "cake", "chocolate"],
        correctIndex: 0,
        type: "context"
    },
    {
        question: "I drink ______ with milk and sugar every morning.",
        options: ["water", "coffee", "juice", "soup"],
        correctIndex: 1,
        type: "context"
    },
    
    // Category 4: Category recognition
    {
        question: "Which of these is a vegetable?",
        options: ["apple", "orange", "broccoli", "banana"],
        correctIndex: 2,
        type: "category"
    },
    {
        question: "Which of these is a dairy product?",
        options: ["bread", "cheese", "meat", "fish"],
        correctIndex: 1,
        type: "category"
    },
    {
        question: "Which of these is a grain?",
        options: ["egg", "rice", "tomato", "juice"],
        correctIndex: 1,
        type: "category"
    },
    {
        question: "Which of these is a citrus fruit?",
        options: ["apple", "grape", "orange", "strawberry"],
        correctIndex: 2,
        type: "category"
    },
    {
        question: "Which of these is a dessert?",
        options: ["soup", "pasta", "cake", "salad"],
        correctIndex: 2,
        type: "category"
    },
    
    // Category 5: Everyday situations
    {
        question: "What do you eat on your birthday?",
        options: ["soup", "cake", "rice", "salad"],
        correctIndex: 1,
        type: "situation"
    },
    {
        question: "What do you make from potatoes?",
        options: ["juice", "bread", "fries", "cheese"],
        correctIndex: 2,
        type: "situation"
    },
    {
        question: "What do you put in a sandwich?",
        options: ["cheese", "coffee", "soup", "juice"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "What do you drink when you're sick?",
        options: ["ice cream", "chocolate", "tea", "cake"],
        correctIndex: 2,
        type: "situation"
    },
    {
        question: "What is in a fruit salad?",
        options: ["apples and bananas", "carrots and potatoes", "meat and fish", "bread and cheese"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "What do you eat with pasta?",
        options: ["tomato sauce", "chocolate", "juice", "cake"],
        correctIndex: 0,
        type: "situation"
    }
];

// Game State
const gameState = {
    currentScreen: 'vocabulary',
    currentQuestionIndex: 0,
    score: 0,
    userAnswers: [],
    quizStarted: false
};

// DOM Elements
const screens = {
    vocabulary: document.getElementById('vocabulary-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen')
};

const startQuizBtn = document.getElementById('start-quiz-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');
const restartQuizBtn = document.getElementById('restart-quiz-btn');
const backToVocabBtn = document.getElementById('back-to-vocab-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreDisplay = document.getElementById('score');
const currentQuestionDisplay = document.getElementById('current-question');
const progressFill = document.getElementById('progress-fill');
const resultsMessage = document.getElementById('results-message');
const correctCountDisplay = document.getElementById('correct-count');
const incorrectCountDisplay = document.getElementById('incorrect-count');
const percentageDisplay = document.getElementById('percentage');
const circleScoreText = document.getElementById('circle-score-text');
const scoreCircle = document.getElementById('score-circle');

// Initialize the game
function initGame() {
    // Set up event listeners
    startQuizBtn.addEventListener('click', startQuiz);
    nextQuestionBtn.addEventListener('click', showNextQuestion);
    restartQuizBtn.addEventListener('click', restartQuiz);
    backToVocabBtn.addEventListener('click', showVocabularyScreen);
    
    // Show initial screen
    showScreen('vocabulary');
    
    // Populate vocabulary display (already done in HTML)
    console.log("Food Vocabulary Quiz initialized!");
}

// Show a specific screen
function showScreen(screenName) {
    // Hide all screens
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show the requested screen
    screens[screenName].classList.add('active');
    gameState.currentScreen = screenName;
    
    // Update UI based on screen
    if (screenName === 'quiz') {
        updateQuizUI();
    } else if (screenName === 'results') {
        showResults();
    }
}

// Start the quiz
function startQuiz() {
    // Reset game state
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.userAnswers = [];
    gameState.quizStarted = true;
    
    // Update UI
    scoreDisplay.textContent = '0';
    currentQuestionDisplay.textContent = '1';
    progressFill.style.width = '0%';
    
    // Show quiz screen
    showScreen('quiz');
    
    // Display first question
    displayQuestion();
}

// Display current question
function displayQuestion() {
    if (gameState.currentQuestionIndex >= quizQuestions.length) {
        showScreen('results');
        return;
    }
    
    const question = quizQuestions[gameState.currentQuestionIndex];
    
    // Update question text
    questionText.textContent = question.question;
    
    // Clear options container
    optionsContainer.innerHTML = '';
    
    // Create option buttons
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        button.dataset.index = index;
        
        button.addEventListener('click', () => selectAnswer(index));
        
        optionsContainer.appendChild(button);
    });
    
    // Update progress
    currentQuestionDisplay.textContent = gameState.currentQuestionIndex + 1;
    const progressPercent = (gameState.currentQuestionIndex / quizQuestions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
    
    // Disable next button until answer is selected
    nextQuestionBtn.disabled = true;
}

// Handle answer selection
function selectAnswer(selectedIndex) {
    const question = quizQuestions[gameState.currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    const selectedButton = buttons[selectedIndex];
    const correctButton = buttons[question.correctIndex];
    
    // Disable all buttons
    buttons.forEach(button => {
        button.disabled = true;
    });
    
    // Mark correct/wrong answers
    if (selectedIndex === question.correctIndex) {
        selectedButton.classList.add('correct');
        gameState.score++;
        scoreDisplay.textContent = gameState.score;
        
        // Add pulse animation to score
        scoreDisplay.parentElement.classList.add('pulse');
        setTimeout(() => {
            scoreDisplay.parentElement.classList.remove('pulse');
        }, 500);
    } else {
        selectedButton.classList.add('wrong');
        correctButton.classList.add('correct');
    }
    
    // Store user answer
    gameState.userAnswers.push({
        questionIndex: gameState.currentQuestionIndex,
        selectedIndex: selectedIndex,
        isCorrect: selectedIndex === question.correctIndex
    });
    
    // Enable next button
    nextQuestionBtn.disabled = false;
}

// Show next question
function showNextQuestion() {
    gameState.currentQuestionIndex++;
    
    if (gameState.currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        showScreen('results');
    }
}

// Show results screen
function showResults() {
    // Calculate final stats
    const totalQuestions = quizQuestions.length;
    const correctCount = gameState.score;
    const incorrectCount = totalQuestions - correctCount;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    
    // Update results UI
    correctCountDisplay.textContent = correctCount;
    incorrectCountDisplay.textContent = incorrectCount;
    percentageDisplay.textContent = percentage;
    circleScoreText.textContent = correctCount;
    
    // Animate the score circle
    const circleCircumference = 2 * Math.PI * 54; // r = 54
    const offset = circleCircumference - (correctCount / totalQuestions) * circleCircumference;
    scoreCircle.style.strokeDashoffset = offset;
    
    // Set final progress bar
    progressFill.style.width = '100%';
    
    // Show appropriate message based on score
    let message = '';
    if (percentage >= 90) {
        message = "Excellent! You're a food vocabulary expert!";
    } else if (percentage >= 70) {
        message = "Great job! You know your food words well.";
    } else if (percentage >= 50) {
        message = "Good effort! Keep practicing to improve.";
    } else {
        message = "Keep learning! Review the vocabulary and try again.";
    }
    
    resultsMessage.textContent = message;
}

// Restart the quiz
function restartQuiz() {
    startQuiz();
}

// Show vocabulary screen
function showVocabularyScreen() {
    showScreen('vocabulary');
}

// Update quiz UI elements
function updateQuizUI() {
    // Nothing needed here for now
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', initGame);
