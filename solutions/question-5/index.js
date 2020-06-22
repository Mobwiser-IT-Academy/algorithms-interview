window.solution5 = inputs => {
  const list = inputs[0];
  const counter = inputs[1];
  if (list.length > counter) {
    list.unshift(...list.splice(-counter));
  } else {
    let i = 0;
    while (i < counter) {
      list.unshift(list.splice(-1));
      i++;
    }
  }
  return list;
};
