import {questions} from "./Questions.js";
import Storage from "./Storage.js";

const quiz=document.getElementById("quiz");
const submitBtn=document.getElementById("submit");
const resetBtn=document.getElementById("reset");
const results=document.getElementById("results");

const storage=new Storage("quiz_app");
let userAnswers=storage.loadAll()||{}

function calcScore(){
  let score=0;
  questions.forEach((e)=>{
    if(userAnswers[e.id] ===e.correctAns){
      score++;
    }
  });
  return score;
}
function showResult(score){
  const total=questions.length;
  const percent=(score/ total)*100;

  if(percent>=70){
    results.textContent= `✅ Passed! You got ${score}/${total} (${percent.toFixed(0)}%)`;
  } else{
    results.textContent= `❌ Failed! You got ${score}/${total} (${percent.toFixed(0)}%)`;
  }
}

function render(){}
submitBtn.addEventListener('click',()=>{
    const score=calcScore();
    showResult(score);
})
resetBtn.addEventListener('click',()=>{
    storage.clearAll();
    userAnswers={};
})





