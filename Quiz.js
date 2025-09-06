import {questions} from "./Questions.js";
import Storage from "./Storage.js";

const quiz=document.getElementById("quiz");
const submitBtn=document.getElementById("submit");
const resetBtn=document.getElementById("reset");
const results=document.getElementById("results");

const storage=new Storage("quiz_app");
let userAnswers=storage.loadAll()||{};

function calcScore(){
  let score=0;
  questions.forEach((e)=>{
    if(userAnswers[e.id] ===e.correctAns){
      score++;
    }
  });
  return score;
}


