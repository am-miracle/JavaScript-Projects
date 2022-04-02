const quizData = [
    {
        question: "How old is Hakimi?",
        a: "19",
        b: "22",
        c: "25",
        d: "31",
        correct: "b"
    },
    {
        question: "Who is the greatest of all time in soccer?",
        a: "Pele",
        b: "Ronaldo",
        c: "Messi",
        d: "Maradona",
        correct: "c"
    },
    {
        question: "Who is the best player in the world?",
        a: "Messi",
        b: "Ronaldo",
        c: "Mbappe",
        d: "Neymar jr",
        correct: "a"
    },
    {
        question: "Most used JavaScript framework in 2021?",
        a: "React js",
        b: "vue js",
        c: "Angular js",
        d: "Other",
        correct: "a"
    },
    {
        question: "Who is the president of United State?",
        a: "Biden",
        b: "Hilary",
        c: "Trump",
        d: "Obama",
        correct: "a"
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "d"
    }
    
];

const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

submitBtn.addEventListener("click",()=>{
    currentQuiz++;

    if(currentQuiz < quizData.length){
        loadQuiz();
    }else{
        alert("your're done")
    }

})
