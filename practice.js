const quiz=[
    {
        question:'What does the abbreviation HTML STAND FOR?',
        a:'HyperText Markdown Language',
        b:'HyperText Markup Language',
        c:'HighText Markdown Language',
        d:'None of the above',
        ans:'ans2'

    },
    {

    question:'Which of the following is correct about HTML? ',
         a:'HTML uses User Defined Tags',
        b:'HTML uses tags defined within the Language',
        c:'Both A and B',
        d:'None of the above',
        ans:'ans2'
    },
{
    question:'What is meant by an empty tag in HTML?',
        a:'There is no such concept of an empty tag in HTML',
        b:'An empty tag does not require a closing tag',
        c:'An empty tag cannot have a content within it',
        d:'None of the above',
        ans:'ans2'
},
{
    question:'What are the attributes used to change the size of an image?',
        a:'Width and height',
        b:'Big and small',
        c:'Top and bottom',
        d:'None of the above',
        ans:'ans1'
},
{
    question:'Which attribute is used to provide a unique name to an HTML element?',
        a:'id',
        b:'class',
        c:'Type',
        d:'None of the above',
        ans:'ans1'
},
{
    question:' Colors are defined in HTML using?',
        a:'RGB Values',
        b:'HEX Values',
        c:'RGBA Values',
        d:'All of the above',
        ans:'ans4'
},
{
    question:'What are the types of unordered lists in HTML?  ',
        a:'Circle, square, disc',
        b:'Triangle, square, disc',
        c:'Triangle, circle, disc',
        d:'All of the above',
        ans:'ans1'
},
{
    question:' Which property is used to set border colors in HTML?  ',
        a:'border-color',
        b:'border',
        c:'Both A and B',
        d:'None of the above',
        ans:'ans2'
},
{
    question:' What are the main components of the front end of any working website?',
        a:'HTML, CSS, JAVASCRIPT',
        b:'HTML only',
        c:'JAVASCRIPT only',
        d:'Node.js.',
        ans:'ans1'
},
{
question:' How do you write "Hello World" in an alert box?',
        a:'alertBox("Hello World");',
        b:'msg("Hello World");',
        c:'alert("Hello World")',
        d:'msgBox("Hello World").',
        ans:'ans3'

}



];

const question =document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 =document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');

let questionCount = 0;
let score=0;

const loadQuestion = ()=>{
const questionList = quiz[questionCount];
question.innerText = questionList.question;
option1.innerText =questionList.a;
option2.innerText = questionList.b;
option3.innerText =questionList.c;
option4.innerText = questionList.d;
}
loadQuestion();


const getCheckAnswer = ()=>{
let answer;

answers.forEach((curAnsElem) =>{
if(curAnsElem.checked){
answer = curAnsElem.id;
}
});
return answer;
};
submit.addEventListener('click', () =>{
const checkedAnswer = getCheckAnswer();
console.log(checkedAnswer);

if(checkedAnswer ===  quiz[questionCount].ans){
    score ++;
    };

    questionCount ++;

    if(questionCount < quiz.length){
    loadQuestion();
    }
    else{

    showScore.innerHTML= 
     `
    <br>
    <br>
    <br>
                    <h3> You scored ${score}/${quiz.length} </h3>
    
  
            <button class="btn" onclick="location.reload()">Play Again</button>

    `;
    }



})