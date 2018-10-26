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
    const correctAns = document.getElementById("answerText4");
    const correctRadio = document.getElementById("answerRadio4");
    const qForm = document.getElementById("question-form");

    //create array of the ac1-3, take the values and randomize their order. You'll put the values of the array randomized into each innerText.

    q.innerText = `${this.name}`;
    ac1.innerText = `${this.ac_1}`;
    ac2.innerText = `${this.ac_2}`;
    ac3.innerText = `${this.ac_3}`;
    correctAns.innerText = `${this.correct_answer}`;
    correctRadio.dataset.id = "correct";
    qForm.dataset.id = `${this.id}`;
  }
}

Question.all = [];
