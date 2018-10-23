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
    return `<p>${this.name}</p>
      <p>${this.cat_id}</p>
      <p>${this.ac_1}</p>
      <p>${this.ac_2}</p>
      <p>${this.ac_3}</p>
      <p>${this.correct_answer}</p>
      `;
  }
}

Question.all = [];
