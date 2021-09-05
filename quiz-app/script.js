const quizData = [
    {
        question: 'How old is seongjun',
        a: '10',
        b: '15',
        c: '23',
        d: '110',
        correct:'c'
    },
    {
        question: 'What is the most used programming language in 2019',
        a: 'Java',
        b: 'C',
        c: 'python',
        d: 'Javascript',
        correct:'a',

    },
    {
        question: 'Who is the President of Korea',
        a: '성준',
        b: '박근혜',
        c: '이명박',
        d: '문재인',
        correct:'a',

    },
      {
        question: 'Who is the President of Korea2',
        a: '성준',
        b: '박근혜',
        c: '이명박',
        d: '문재인',
        correct:'a',

    },
    {
        question: 'Who is the President of Korea3',
        a: '성준',
        b: '박근혜',
        c: '이명박',
        d: '문재인',
        correct:'a',

    },
];



const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submit = document.querySelector("button");
const lastPopup = document.getElementById("last-popup")

let currentQuestion = 0;

loadQuize();

function loadQuize(){

    const currentQuizData = quizData[currentQuestion];

    questionEl.innerText = `${currentQuestion}. ${currentQuizData.question}`;
    a_text.innerText =currentQuizData.a;
    b_text.innerText =currentQuizData.b;
    c_text.innerText =currentQuizData.c;
    d_text.innerText =currentQuizData.d;
    
}




function getSelected(){
    const answers = document.querySelectorAll(".answer");
    let selected;
    answers.forEach((answer)=>{
        if(answer.checked === true){
            selected = answer.id;
            answer.checked = false;
        }
    });
    return selected;
}

function onSubmit(event)
{
    // let selected= getSelected();

   const selected = getSelected()
    const currentQuizData = quizData[currentQuestion];
    currentQuizAnswer= currentQuizData.correct;
    console.log(currentQuizAnswer);
    console.log(selected);

    if (currentQuizAnswer === selected)
    {
        console.log("correct");
        currentQuestion++;
        if (currentQuestion < quizData.length)
        {
            loadQuize();

        }
        else{
            alert("You finished! Get yourself an Range Lemonade");
            lastPopup.classList.remove("hidden");
            
        }
    }
    else{
        console.log("you are wrong, try again");
    }
    // if (`${currentQuizAnswer}_input.checked == true`)
    // {
    //     console.log("correct");
    // }

}

submit.addEventListener("click", onSubmit);