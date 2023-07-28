window.addEventListener("resize", function (event) {
  if (document.body) document.body.scrollTo(0, 0); //Fixes the weird overflow behaivour on screen resize;
});

var githubLangSrc =
  "https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=khaled-0" +
  "&layout=compact" +
  "&bg_color=292b2f" +
  "&text_color=f5f5f5" +
  "&hide_border=true" +
  "&langs_count=10" +
  "&custom_title=Khaled's Most Used Languages" +
  "&title_color=f5f5f5";

var gitHubStatsSrc =
  "https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=khaled-0" +
  "&show_icons=true" +
  "&include_all_commits=true" +
  "&title_color=f5f5f5" +
  "&text_color=f5f5f5" +
  "&bg_color=292b2f" +
  "&hide_border=true" +
  "&icon_color=ffffff";

preloadImages([gitHubStatsSrc, githubLangSrc]);

function toggleProjectsListExpandCollapse() {
  const view = document.querySelector(".worked-projects-container");
  const toggleButton = document.querySelector(".projects-nav");

  if (view.classList.contains("row")) {
    view.classList.remove("row");
    view.style.justifyContent = null;
    toggleButton.dataset.expanded = "false";
    toggleButton.innerHTML = "Expand";
  } else {
    view.classList.add("row");
    view.style.justifyContent = "center";
    toggleButton.dataset.expanded = "true";
    toggleButton.innerHTML = "Collapse";
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

function preloadImages(paths) {
  paths.forEach(async function (path) {
    var img = new Image();
    img.src = path;
  });
}
