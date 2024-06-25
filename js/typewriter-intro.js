const introDescList = [
  "Welcome to my portfolio.",
  "Hope you're doing great.",
  "Unlocking Tech Wonders.",
  "Beyond Boundaries, Techwise.",
  "Tech Trailblazer at Your Service.",
  "Empowering Future through Tech.",
  "Building Brilliance, Byte by Byte.",
  "These lines are AI Generated :3",
];

var currentItemOnScreen = 0;
const textView = document.getElementById("introWelcomeSubtitle");

async function typeWriter() {
  //Pick the next item and so on
  var introDesc = introDescList[currentItemOnScreen++ % introDescList.length];
  //Hehe boii
  if (randomIntFromInterval(1, 999) == 420) {
    introDesc = "amongussssssss";
    currentItemOnScreen = 0;
  }

  textView.innerHTML = "";
  for (i = 0; i < introDesc.length; i++) {
    textView.innerHTML += introDesc.charAt(i);
    await sleep(50);
  }
  setTimeout(typeWriter, 2500);
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
  //Blink the cursor
  setInterval(() => {
    const introCursor = document.getElementById("introCursor");
    if (introCursor.style.opacity == 0) introCursor.style.opacity = 1;
    else introCursor.style.opacity = 0;
  }, 500);
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
