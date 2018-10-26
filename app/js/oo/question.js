class Question {
  constructor(question) {
    this.id = question.id;
    this.name = question.name;
    this.ac_1 = question.ac_1;
    this.ac_2 = question.ac_2;
    this.ac_3 = question.ac_3;
    this.correct_answer = question.correct_answer;
    this.cat_id = question.cat_id;
    Question.all.push(this);
  }

  showQuestion() {
    const q = document.getElementById("inputQuestion1");
    const ac1 = document.getElementById("answerText1");
    const ac2 = document.getElementById("answerText2");
    const ac3 = document.getElementById("answerText3");
    const ac4 = document.getElementById("answerText4");
    //const correctRadio = document.getElementById("answerRadio4");
    const qForm = document.getElementById("question-form");

    let questions = [this.ac_1, this.ac_2, this.ac_3, this.correct_answer];
    shuffleArray(questions);
    q.innerText = `${this.name}`;
    ac1.innerText = `${questions[0]}`;
    ac2.innerText = `${questions[1]}`;
    ac3.innerText = `${questions[2]}`;
    ac4.innerText = `${questions[3]}`;
    const elements = [ac1, ac2, ac3, ac4];
    for (let i = 0; i < 4; i++) {
      if (elements[i].innerText === this.correct_answer) {
        elements[i].previousElementSibling.dataset.id = "correct";
      }
    }
    qForm.dataset.id = `${this.id}`;
  }
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
  }
}

Question.all = [];