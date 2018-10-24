class Question {
  constructor(question) {
    this.name = question.name;
    this.ac_1 = question.ac_1;
    this.ac_2 = question.ac_2;
    this.ac_3 = question.ac_3;
    this.correct_answer = question.correct_answer;
    this.cat_id = question.cat_id;
    Question.all.push(this);
  }

  showQuestion() {
    question = Question.all[0]
    q = document.getElementById('inputQuestion1')
    ac1 = document.getElementById('answerRadio1')
    ac2 = document.getElementById('answerRadio2')
    ac3 = document.getElementById('answerRadio3')
    correctAns = document.getElementById('answerRadio4')

    q.innerHTML = ``
    
  }
}

Question.all = [];
