$(document).ready(() => {
  let questionsHtml = "";
  const questionsListContainer = $(".collapsible.questions");
  window.questions.forEach((question, index) => {
    const exercice = question.exercice;
    console.log(exercice);
    const solution = question.solution(exercice.inputs);
    const isCorrect = solution === exercice.output;
    const inputsString = exercice.inputs.reduce(
      (inputString, input) => (inputString += `${JSON.stringify(input)},`),
      ""
    );
    questionsHtml += `<li>
          <div class="collapsible-header">
            <i class="material-icons ${isCorrect ? "check" : "error"}">${
      isCorrect ? "check" : "error"
    }</i>
            Question #${index + 1} - ${question.title}
          </div>
          <div class="collapsible-body">
             ${question.instructions}
             <blockquote>
                <div>Inputs: (${inputsString.substr(
                  0,
                  inputsString.length - 1
                )}) </div>
                <div>Expected output: ${JSON.stringify(solution)} </div>
                <div>Received output: ${JSON.stringify(exercice.output)} </div>
            </blockquote>
          </div>
        </li>`;
  });
  questionsListContainer.html(questionsHtml);
  questionsListContainer.collapsible();
  $('.sidenav').sidenav();
});
