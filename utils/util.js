window.generateExercice = (fn, ...inputs) => {
  return {
    inputs,
    output: fn(inputs)
  };
}
