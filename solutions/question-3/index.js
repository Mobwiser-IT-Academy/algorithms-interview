window.solution3 = (inputs) => {
  return (
    inputs[0]
      .toLowerCase()
      .split("")
      .sort()
      .join("") ===
    inputs[1]
      .toLowerCase()
      .split("")
      .sort()
      .join("")
  );
};
