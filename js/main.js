window.addEventListener("resize", function (event) {
  if (document.body) document.body.scrollTo(0, 0); //Fixes the weird overflow behaivour on screen resize;
});

function scrollToLeft(viewSelector, scrollMultiplier = 1) {
  const view = document.querySelector(viewSelector);
  view.scrollLeft -= 100 * scrollMultiplier;
}

function scrollToRight(viewSelector, scrollMultiplier = 1) {
  const view = document.querySelector(viewSelector);
  view.scrollLeft += 100 * scrollMultiplier;
}

function isOverflown(element) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}
