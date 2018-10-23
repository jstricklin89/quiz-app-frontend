class AnsweredQuestion {
  constructor(a_q) {
    this.user_name = a_q.user.name;
    this.question_id = a_q.question.id;
    this.correct_answer = a_q.correct_answer;
    AnsweredQuestion.all.push(this);
  }

  showAnsweredQuestion() {
    return `<p>This is the AnsweredQuestion NAME: ${this.user_name}</p>
    <p>This is the AnsweredQuestion ID: ${this.question_id}</p>
    <p>This is the AnsweredQuestion CORRECT ANSWER: ${this.correct_answer}</p>`;
  }
}

AnsweredQuestion.all = [];
