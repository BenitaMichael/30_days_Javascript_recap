const questions =[
    {
        question: "What is the easiest programming language?",
        answers:[
            {text: "C", correct: false},
            {text: "Python", correct: false},
            {text: "Ruby on rails", correct: false},
            {text: "Javascript", correct: true},
        ]
    },
    {
        question: "What is the meaning of HTML?",
        answers:[
            {text: "Hyper Text Markup Language", correct: true},
            {text: "Hyper Text Morkup Listener", correct: false},
            {text: "Hypo Text Messaging Language", correct: false},
            {text: "Hyper Text Margin Language", correct: false},
        ]
    },
    {
        question: "Which is not a data type?",
        answers:[
            {text: "Int", correct: false},
            {text: "Strings", correct: false},
            {text: "Products", correct: true},
            {text: "Booleen", correct: false,}
        ]
    },
    {
        question: "Which of these print the current working directory",
        answers:[
            {text: "echo", correct: false},
            {text: "cd", correct: false},
            {text: "ls", correct: false},
            {text: "pwd", correct: true},
        ]
    },
    {
        question: "Which of these is an example of a sorting method",
        answers:[
            {text: "Captain sort", correct: false},
            {text: "Bubble sort", correct: true},
            {text: "Racket sort", correct: false},
            {text: "Valley sort", correct: false},
        ]
    }
]

const questionElement = document.getElementById("question");
const answerElements = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");


let currentQuestionIndex = 0;
let score = 0;

startQuiz = () =>{
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestions();
}

showQuestions = () =>{

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    //To give the question a number:
    questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    //To display the answers:
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerElements.appendChild(button);
        //To check if an answer is correct
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAns)
    });
}

resetState = () =>{
    nextBtn.style.display = "none";
    while(answerElements.firstChild){
        answerElements.removeChild(answerElements.firstChild);
    }
}

selectAns = (e) =>{
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct == "true";
    if(isCorrect){
        selectedButton.classList.add("correct");
        score++;
    }else{
        selectedButton.classList.add("incorrect")
    }

    //To show if an answer is correct
    Array.from(answerElements.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextBtn.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}.`
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

handleNext = () =>{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNext();
    }else{
        startQuiz();
    }
})

startQuiz();