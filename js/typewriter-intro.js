const introDescList = [
  "Writing code so clean even future-me understands it.",
  "Turning caffeine into scalable software since… well, several cups ago.",
  "I fix bugs I definitely did not create. Promise.",
  "Engineering solutions with just the right amount of wizardry.",
  "Turning 'it should be simple' into 'it actually works.'",
  "Coding like the internet depends on it (because it probably does).",
  "Breaking limits, not production. (At least not on purpose.)",
  "Turning tech chaos into elegant order—one deploy at a time.",
  "Your friendly neighborhood developer — now with extra features.",
  "Where professionalism meets just a hint of controlled nerd energy.",
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
  setTimeout(typeWriter, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
  //Blink the cursor
  setInterval(() => {
    const introCursor = document.getElementById("introCursor");
    if (introCursor.style.opacity == 0) introCursor.style.opacity = 1;
    else introCursor.style.opacity = 0;
  }, 300);
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
