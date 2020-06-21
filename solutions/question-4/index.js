window.solution4 = inputs => {
  return Math.fround(
    inputs[0].reduce((sum, entry) => (sum += entry)) / inputs[0].length
  );
};
