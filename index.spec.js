import './utils/util';
import './questions/question-1';
import './questions/question-2';
import './questions/question-3';
import './questions/question-4';
import './questions/question-5';

import './solutions/question-1';
import './solutions/question-2';
import './solutions/question-3';
import './solutions/question-4';
import './solutions/question-5';
import './data';

window.questions.forEach((question, index) => {
  test(`Question #${index + 1} - ${question.title}`, () => {
    const exercice = question.exercice;
    const solution = question.solution(exercice.inputs);
    expect(exercice.output).toEqual(solution);
  });
});
