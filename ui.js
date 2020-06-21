const questions = [
  {
    title: "Simple array sum",
    instructions: `<i>
                       Create a function that receives an array of integers and returns the sum of those numbers
                       <br/>
                       Example:
                       <ul>
                        <li>Input: [1,2,3,4,5]</li>
                        <li>Output: 15</li>
                       </ul>
                   </i>`,
    exercice: window.exercice1(),
    solution: window.solution1
  },
  {
    title: "Reverse string",
    instructions: `<i>
                       Create a function that receives a string and returns the reverse of that string
                       <br/>
                       Example:
                       <ul>
                        <li>Input: Hello</li>
                        <li>Output: olleH</li>
                       </ul>
                   </i>`,
    exercice: window.exercice2(),
    solution: window.solution2
  }
];
$(document).ready(() => {
  let questionsHtml = "";
  const questionsListContainer = $(".collapsible.questions");
  questions.forEach((question, index) => {
    const exercice = question.exercice;
    const solution = question.solution(exercice.input);
    const isCorrect = solution === exercice.output;
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
                <div>Input: ${JSON.stringify(exercice.input)} </div>
                <div>Expected output: ${JSON.stringify(solution)} </div>
                <div>Received output: ${JSON.stringify(exercice.output)} </div>
            </blockquote>
          </div>
        </li>`;
  });
  questionsListContainer.html(questionsHtml);
  questionsListContainer.collapsible();
});
