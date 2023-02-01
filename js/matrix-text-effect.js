function displayInMatrixEffect(element) {
  let interval = null;
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    element.innerText = element.innerText
      .split("")
      .map((_letter, index) => {
        if (index < iteration) {
          return element.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= element.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 25);
}
