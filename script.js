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

// Particle Background Configuration (particles.js)
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: { value: "#c299ff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" }
    },
    opacity: {
      value: 0.5,
      random: false
    },
    size: {
      value: 2,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#c299ff",
      opacity: 0.6,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: true,
      attract: {
        enable: false
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: { opacity: 1 }
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});
