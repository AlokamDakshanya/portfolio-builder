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

// Floating Contact Modal Logic
function openContactModal() {
  const modal = document.getElementById("contactModal");
  if (modal) modal.style.display = "flex";
}

function closeContactModal() {
  const modal = document.getElementById("contactModal");
  if (modal) modal.style.display = "none";
}

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  const modal = document.getElementById("contactModal");
  const content = document.querySelector(".contact-modal-content");
  if (modal && event.target === modal) {
    closeContactModal();
  }
});

// ✉️ Send form data to backend
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/send-email", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      const result = await response.json();
      if (response.ok) {
        showSuccessPopup("✅ Message sent successfully!");
        contactForm.reset();
        closeContactModal();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try later.");
    }
  });
}

// ✅ Custom Popup Notification
function showSuccessPopup(message = "✅ Message sent!") {
  const popup = document.createElement("div");
  popup.className = "popup-message";
  popup.innerHTML = message;
  document.body.appendChild(popup);

  const dismiss = () => {
    popup.classList.add("fade-out");
    setTimeout(() => popup.remove(), 300);
    document.removeEventListener("click", dismiss);
  };

  // Auto-dismiss after 3s or click anywhere
  setTimeout(dismiss, 3000);
  setTimeout(() => document.addEventListener("click", dismiss), 0);
}

// ✅ Connect Button Popup Toggle
const connectBtn = document.getElementById("connectBtn");
const popupMenu = document.getElementById("popupMenu");

if (connectBtn && popupMenu) {
  connectBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent event bubbling
    popupMenu.classList.toggle("show");
  });

  // Close popup if clicking outside
  window.addEventListener("click", (e) => {
    if (!popupMenu.contains(e.target) && !connectBtn.contains(e.target)) {
      popupMenu.classList.remove("show");
    }
  });
}
