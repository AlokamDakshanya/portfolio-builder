// Button Alert Interaction
const getStartedBtn = document.getElementById("getStarted");
if (getStartedBtn) {
  getStartedBtn.addEventListener("click", () => {
    alert("Let’s start building your portfolio!");
  });
}

// Scroll Animation for .fade-in elements
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ⭐ Star Trail on Mouse Move
document.addEventListener("mousemove", (e) => {
  const star = document.createElement("div");
  star.className = "star-trail";
  star.innerHTML = "★";
  star.style.left = `${e.clientX}px`;
  star.style.top = `${e.clientY}px`;
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 800);
});
