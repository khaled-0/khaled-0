window.addEventListener("resize", function (event) {
  if (document.body) document.body.scrollTo(0, 0); //Fixes the weird overflow behaivour on screen resize;
  showHideProjectsNavOnOverflow();
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

preloadImages([
  "./img/avatar.jpg",
  "./img/avatar-symbol.png",
  "./img/background.avif",
  "./img/project-banners/digital-telecom.webp",
  "./img/project-banners/discord-bots.webp",
  "./img/project-banners/Sketchware-Pro.webp",
  "./img/project-banners/untitled-chat-app.webp",
  gitHubStatsSrc,
  githubLangSrc,
]);

function toggleProfilePic(element, symbolAvatar = true) {
  if (symbolAvatar) element.setAttribute("src", "./img/avatar-symbol.png");
  else element.setAttribute("src", "./img/avatar.jpg");
}

function showHideProjectsNavOnOverflow() {
  const container = document.querySelector(".worked-projects-container");

  if (!isOverflown(container) && container.classList.contains("row"))
    return (document.querySelector(".projects-nav").style.display = "block");

  if (container.classList.contains("row") || isOverflown(container))
    return (document.querySelector(".projects-nav").style.display = "block");

  document.querySelector(".projects-nav").style.display = "none";
}

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

  showHideProjectsNavOnOverflow();
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
