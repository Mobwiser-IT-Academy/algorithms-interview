window.generateExercice = (input, fn) => {
  return {
    input,
    output: fn(input)
  };
}
