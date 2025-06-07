const dialogText = document.getElementById("dialog-text");
const nextBtn = document.getElementById("next-btn");

const dialog = [
  "Hi friend! Want to try a calming activity with me?",
  "It's called the 5-4-3-2-1 grounding technique.",
  "Let’s notice 5 things you can see around you.",
  "Now, 4 things you can feel — like your clothes or the air.",
  "Next, 3 things you can hear.",
  "Now, 2 things you can smell.",
  "Finally, 1 thing you can taste — or just remember the taste of something comforting!",
  "Great job. You did it! I'm so proud of you.",
  "You can come back to this anytime you need a pause. 🐻"
];

let dialogIndex = 0;

nextBtn.addEventListener("click", () => {
  dialogIndex++;
  if (dialogIndex < dialog.length) {
    dialogText.textContent = dialog[dialogIndex];
  } else {
    nextBtn.disabled = true;
    nextBtn.textContent = "Done";
  }
});
