// Данные лексики
const vocabulary = {
    basicFoods: ['bread', 'rice', 'pasta', 'cheese', 'egg', 'meat', 'fish', 'soup'],
    fruits: ['apple', 'banana', 'orange', 'strawberry', 'grape', 'watermelon', 'pineapple'],
    vegetables: ['carrot', 'tomato', 'potato', 'onion', 'salad', 'broccoli', 'mushroom'],
    sweetsDrinks: ['cake', 'chocolate', 'ice cream', 'juice', 'coffee', 'tea', 'water']
};

// Вопросы для теста
const quizQuestions = [
    // Категория 1: Выбери правильный перевод
    {
        question: "Как будет 'яблоко' на английском?",
        options: ["apple", "orange", "banana", "grape"],
        correctIndex: 0,
        type: "choose"
    },
    {
        question: "Как будет 'рис' на английском?",
        options: ["bread", "pasta", "rice", "meat"],
        correctIndex: 2,
        type: "choose"
    },
    {
        question: "Как будет 'сыр' на английском?",
        options: ["cheese", "egg", "meat", "fish"],
        correctIndex: 0,
        type: "choose"
    },
    {
        question: "Как будет 'вода' на английском?",
        options: ["juice", "coffee", "tea", "water"],
        correctIndex: 3,
        type: "choose"
    },
    {
        question: "Как будет 'хлеб' на английском?",
        options: ["bread", "rice", "cake", "cheese"],
        correctIndex: 0,
        type: "choose"
    },
    {
        question: "Как будет 'кофе' на английском?",
        options: ["tea", "juice", "coffee", "water"],
        correctIndex: 2,
        type: "choose"
    },
    {
        question: "Как будет 'мясо' на английском?",
        options: ["fish", "egg", "meat", "cheese"],
        correctIndex: 2,
        type: "choose"
    },
    {
        question: "Как будет 'чай' на английском?",
        options: ["coffee", "tea", "juice", "water"],
        correctIndex: 1,
        type: "choose"
    },
    
    // Категория 2: Что это за слово?
    {
        question: "Apple - это что?",
        options: ["Овощ", "Фрукт", "Напиток", "Мясо"],
        correctIndex: 1,
        type: "category"
    },
    {
        question: "Carrot - это что?",
        options: ["Фрукт", "Овощ", "Сладость", "Напиток"],
        correctIndex: 1,
        type: "category"
    },
    {
        question: "Chocolate - это что?",
        options: ["Овощ", "Фрукт", "Сладость", "Напиток"],
        correctIndex: 2,
        type: "category"
    },
    {
        question: "Coffee - это что?",
        options: ["Еда", "Фрукт", "Овощ", "Напиток"],
        correctIndex: 3,
        type: "category"
    },
    {
        question: "Fish - это что?",
        options: ["Овощ", "Фрукт", "Мясо/рыба", "Напиток"],
        correctIndex: 2,
        type: "category"
    },
    {
        question: "Cake - это что?",
        options: ["Основная еда", "Овощ", "Сладость", "Напиток"],
        correctIndex: 2,
        type: "category"
    },
    
    // Категория 3: Выбери лишнее
    {
        question: "Какое слово лишнее?",
        options: ["apple", "banana", "carrot", "orange"],
        correctIndex: 2,
        type: "category"
    },
    {
        question: "Какое слово лишнее?",
        options: ["coffee", "tea", "juice", "cheese"],
        correctIndex: 3,
        type: "category"
    },
    {
        question: "Какое слово лишнее?",
        options: ["bread", "rice", "pasta", "watermelon"],
        correctIndex: 3,
        type: "category"
    },
    {
        question: "Какое слово лишнее?",
        options: ["carrot", "tomato", "potato", "chocolate"],
        correctIndex: 3,
        type: "category"
    },
    {
        question: "Какое слово лишнее?",
        options: ["cake", "ice cream", "chocolate", "meat"],
        correctIndex: 3,
        type: "category"
    },
    
    // Категория 4: Простые ситуации
    {
        question: "Что ты ешь на завтрак? (What do you eat for breakfast?)",
        options: ["bread", "soup", "cake", "ice cream"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Что ты пьёшь утром? (What do you drink in the morning?)",
        options: ["coffee", "soup", "ice cream", "meat"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Что сладкое? (What is sweet?)",
        options: ["chocolate", "rice", "meat", "fish"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Что растёт на дереве? (What grows on a tree?)",
        options: ["apple", "carrot", "potato", "rice"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Что ты ешь в салате? (What do you eat in a salad?)",
        options: ["tomato", "chocolate", "cake", "coffee"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Что холодное и сладкое? (What is cold and sweet?)",
        options: ["ice cream", "soup", "rice", "bread"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Что из этого фрукт? (Which of these is a fruit?)",
        options: ["banana", "carrot", "potato", "bread"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Что из этого овощ? (Which of these is a vegetable?)",
        options: ["potato", "apple", "banana", "orange"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Что ты можешь пить? (What can you drink?)",
        options: ["water", "bread", "meat", "cheese"],
        correctIndex: 0,
        type: "situation"
    },
    {
        question: "Что делают из молока? (What is made from milk?)",
        options: ["cheese", "meat", "fish", "bread"],
        correctIndex: 0,
        type: "situation"
    }
];

// Состояние игры
const gameState = {
    currentScreen: 'vocabulary',
    currentQuestionIndex: 0,
    score: 0,
    userAnswers: [],
    quizStarted: false
};

// DOM элементы
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

// Инициализация игры
function initGame() {
    // Настройка обработчиков событий
    startQuizBtn.addEventListener('click', startQuiz);
    nextQuestionBtn.addEventListener('click', showNextQuestion);
    restartQuizBtn.addEventListener('click', restartQuiz);
    backToVocabBtn.addEventListener('click', showVocabularyScreen);
    
    // Показать начальный экран
    showScreen('vocabulary');
    
    console.log("Игра 'Английские слова: Еда' инициализирована!");
}

// Показать определённый экран
function showScreen(screenName) {
    // Скрыть все экраны
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Показать запрошенный экран
    screens[screenName].classList.add('active');
    gameState.currentScreen = screenName;
    
    // Обновить UI в зависимости от экрана
    if (screenName === 'quiz') {
        updateQuizUI();
    } else if (screenName === 'results') {
        showResults();
    }
}

// Начать тест
function startQuiz() {
    // Сбросить состояние игры
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.userAnswers = [];
    gameState.quizStarted = true;
    
    // Обновить UI
    scoreDisplay.textContent = '0';
    currentQuestionDisplay.textContent = '1';
    progressFill.style.width = '0%';
    
    // Показать экран теста
    showScreen('quiz');
    
    // Показать первый вопрос
    displayQuestion();
}

// Показать текущий вопрос
function displayQuestion() {
    if (gameState.currentQuestionIndex >= quizQuestions.length) {
        showScreen('results');
        return;
    }
    
    const question = quizQuestions[gameState.currentQuestionIndex];
    
    // Обновить текст вопроса
    questionText.textContent = question.question;
    
    // Очистить контейнер вариантов
    optionsContainer.innerHTML = '';
    
    // Создать кнопки вариантов
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        button.dataset.index = index;
        
        button.addEventListener('click', () => selectAnswer(index));
        
        optionsContainer.appendChild(button);
    });
    
    // Обновить прогресс
    currentQuestionDisplay.textContent = gameState.currentQuestionIndex + 1;
    const progressPercent = (gameState.currentQuestionIndex / quizQuestions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
    
    // Отключить кнопку "Следующий" пока не выбран ответ
    nextQuestionBtn.disabled = true;
}

// Обработать выбор ответа
function selectAnswer(selectedIndex) {
    const question = quizQuestions[gameState.currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    const selectedButton = buttons[selectedIndex];
    const correctButton = buttons[question.correctIndex];
    
    // Отключить все кнопки
    buttons.forEach(button => {
        button.disabled = true;
    });
    
    // Показать правильные/неправильные ответы
    if (selectedIndex === question.correctIndex) {
        selectedButton.classList.add('correct');
        gameState.score++;
        scoreDisplay.textContent = gameState.score;
        
        // Добавить анимацию пульсации к счёту
        scoreDisplay.parentElement.classList.add('pulse');
        setTimeout(() => {
            scoreDisplay.parentElement.classList.remove('pulse');
        }, 500);
    } else {
        selectedButton.classList.add('wrong');
        correctButton.classList.add('correct');
    }
    
    // Сохранить ответ пользователя
    gameState.userAnswers.push({
        questionIndex: gameState.currentQuestionIndex,
        selectedIndex: selectedIndex,
        isCorrect: selectedIndex === question.correctIndex
    });
    
    // Включить кнопку "Следующий"
    nextQuestionBtn.disabled = false;
}

// Показать следующий вопрос
function showNextQuestion() {
    gameState.currentQuestionIndex++;
    
    if (gameState.currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        showScreen('results');
    }
}

// Показать экран результатов
function showResults() {
    // Рассчитать итоговую статистику
    const totalQuestions = quizQuestions.length;
    const correctCount = gameState.score;
    const incorrectCount = totalQuestions - correctCount;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    
    // Обновить UI результатов
    correctCountDisplay.textContent = correctCount;
    incorrectCountDisplay.textContent = incorrectCount;
    percentageDisplay.textContent = percentage;
    circleScoreText.textContent = correctCount;
    
    // Анимировать круг с результатом
    const circleCircumference = 2 * Math.PI * 54; // r = 54
    const offset = circleCircumference - (correctCount / totalQuestions) * circleCircumference;
    scoreCircle.style.strokeDashoffset = offset;
    
    // Установить конечное состояние прогресс-бара
    progressFill.style.width = '100%';
    
    // Показать соответствующее сообщение в зависимости от результата
    let message = '';
    if (percentage >= 90) {
        message = "Отлично! Вы отлично знаете слова по теме 'Еда'!";
    } else if (percentage >= 70) {
        message = "Хорошая работа! Вы хорошо знаете слова о еде.";
    } else if (percentage >= 50) {
        message = "Неплохо! Продолжайте практиковаться, чтобы улучшить результат.";
    } else {
        message = "Продолжайте учить слова! Повторите лексику и попробуйте ещё раз.";
    }
    
    resultsMessage.textContent = message;
}

// Начать тест заново
function restartQuiz() {
    startQuiz();
}

// Показать экран с лексикой
function showVocabularyScreen() {
    showScreen('vocabulary');
}

// Обновить элементы UI теста
function updateQuizUI() {
    // Пока ничего не нужно
}

// Инициализировать игру при загрузке DOM
document.addEventListener('DOMContentLoaded', initGame);
