const getStartedBtn = document.getElementById("getStartedBtn");
const learnMoreBtn = document.getElementById("learnMoreBtn");
const getStartedSection = document.getElementById("get-started");
const learnMoreSection = document.getElementById("learn-more");

function revealSection(section) {
  if (!section) return;
  section.classList.remove("hidden");
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

getStartedBtn?.addEventListener("click", (event) => {
  event.preventDefault();
  revealSection(getStartedSection);
});

learnMoreBtn?.addEventListener("click", (event) => {
  event.preventDefault();
  revealSection(learnMoreSection);
});
