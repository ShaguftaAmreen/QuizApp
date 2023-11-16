const quizArr=[{
    question:"Q1: What is the full form of HTML?",
    a:"Hello to my world",
    b:"Hey text markup language",
    c:"HyperText markup language",
    d:"Hypertext markup language",
    ans:"d"
},{
question:"Q2: What is the full form of CSS?",
a:"Cascading style sheets",
b:"Cascading style sheeps",
c:"Cartoon style sheets",
d:"Cascading super sheets",
ans:"a"
},
{
    question:"Q3: What is the full form of HTTP?",
    a:"Hypertext transfer product",
    b:"Hypertext test protocol",
    c:"Hey transfer protocol",
    d:"Hypertext transfer protocol",
    ans:"d"
    },
    {
        question:"Q4: What is the full form of JS?",
        a:"Javascript",
        b:"Javasuper",
        c:"Justscript",
        d:"Java'sScript",
        ans:"a"
        },

];

const question=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const submit=document.querySelector("#submit");
const answers=document.querySelectorAll(".answer");
const showscore=document.querySelector("#showscore");
let Qcount=0;
let score=0;
const loadQuestion=()=>{
question.innerText=quizArr[Qcount].question;
option1.innerText=quizArr[Qcount].a;
option2.innerText=quizArr[Qcount].b;
option3.innerText=quizArr[Qcount].c;
option4.innerText=quizArr[Qcount].d;
}
loadQuestion();

const getCheckAns=()=>{
    let answer;
answers.forEach((CurrentAnsEle)=>{
if(CurrentAnsEle.checked){
answer=CurrentAnsEle.id;}

});
return answer;
}

submit.addEventListener("click",()=>{
const checkAns=getCheckAns();
console.log(checkAns);
if(checkAns===quizArr[Qcount].ans)
{
    score++;
};
Qcount++;
if(Qcount<quizArr.length){
    loadQuestion(); 
}
else{
showscore.innerHTML=`
<h3>you scored : (${score} / ${quizArr.length})</h3>
<button onclick="location.reload()">Play Again</button>`;
showscore.classList.remove("scoreArea");
}
});



























