function scrollToHash(hash) {
  if (!hash || hash === "#") return;
  const target = document.querySelector(hash);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");
    const target = hash ? document.querySelector(hash) : null;
    if (!target) return;
    event.preventDefault();
    scrollToHash(hash);
    history.replaceState(null, "", hash);
  });
});
