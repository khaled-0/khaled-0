window.addEventListener("resize", function (event) {
  document.body.scrollTo(0, 0); //Fixes the weird overflow behaivour on screen resize;
  showHideProjectsNavOnOverflow();
});

function showHideProjectsNavOnOverflow() {
  if (isOverflown(document.querySelector(".worked-projects-container"))) {
    document.querySelector(".projects-nav-left").style.display = "block";
    document.querySelector(".projects-nav-right").style.display = "block";
  }
}

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
