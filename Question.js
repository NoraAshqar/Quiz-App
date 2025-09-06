export default class Question {
  constructor(id, text, options, correctAns) {
    this.id = id;
    this.text = text;
    this.options = options;
    this.correctAns = correctAns;
  }
  isCorrect(answer){
    return answer===this.correctAns;
  }
}