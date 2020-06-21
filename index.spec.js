import './utils/util';
import { exercice as exercice1 } from "./questions/question-1";
import { solution as solution1 } from "./solutions/question-1";

test("Question #1", () => {
  const exercice = exercice1();
  expect(exercice.output).toBe(solution1(exercice.input));
});
