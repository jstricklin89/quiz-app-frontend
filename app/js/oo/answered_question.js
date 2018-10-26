class AnsweredQuestion {
  constructor(a_q) {
    this.user_name = a_q.user.name;
    this.question_id = a_q.question.id;
    this.correct_answer = a_q.correct_answer;
    AnsweredQuestion.all.push(this);
  }

}

AnsweredQuestion.all = [];
