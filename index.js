// ---- Language ----
function setLang(lang) {
  document.body.classList.remove("lang-en", "lang-mr");
  document.body.classList.add("lang-" + lang);
  document
    .getElementById("btn-en")
    .classList.toggle("active-lang", lang === "en");
  document
    .getElementById("btn-mr")
    .classList.toggle("active-lang", lang === "mr");
}

// ---- Section navigation ----
const sections = [
  "home",
  "history",
  "festivals",
  "gallery",
  "committee",
  "contact",
];

function showSection(id) {
  // Show the hero only on home
  document.querySelector(".hero").style.display =
    id === "home" ? "block" : "none";

  sections.forEach((s) => {
    const el = document.getElementById("sec-" + s);
    if (el) el.style.display = s === id ? "block" : "none";
  });

  // Also show home welcome when on home
  const homeEl = document.getElementById("sec-home");
  if (homeEl) homeEl.style.display = id === "home" ? "block" : "none";

  // Update active nav link
  document.querySelectorAll(".nav-links li a").forEach((a) => {
    a.classList.toggle(
      "active",
      a.getAttribute("onclick") &&
        a.getAttribute("onclick").includes("'" + id + "'"),
    );
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show home on load
showSection("home");

// ---- Mobile menu ----
function toggleMenu() {
  document.getElementById("mobileNav").classList.toggle("open");
}

// ---- Lightbox ----
function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
