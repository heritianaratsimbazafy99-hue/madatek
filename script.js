const header = document.querySelector("[data-header]");
const toggle = document.querySelector(".nav-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = [...document.querySelectorAll(".nav-panel a")];
const revealEls = [...document.querySelectorAll(".reveal")];
const heroVisual = document.querySelector(".hero-visual");
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

toggle?.addEventListener("click", () => {
  const next = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", String(next));
  navPanel.classList.toggle("is-open", next);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggle?.setAttribute("aria-expanded", "false");
    navPanel.classList.remove("is-open");
  });
});

if (!reduceMotion) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -60px 0px" }
  );

  revealEls.forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`;
    revealObserver.observe(el);
  });
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

if (!reduceMotion) {
  window.addEventListener(
    "pointermove",
    (event) => {
      const mx = Math.round((event.clientX / window.innerWidth) * 100);
      const my = Math.round((event.clientY / window.innerHeight) * 100);
      document.documentElement.style.setProperty("--mx", `${mx}%`);
      document.documentElement.style.setProperty("--my", `${my}%`);

      if (heroVisual) {
        const x = ((event.clientX / window.innerWidth) - 0.5) * 18;
        const y = ((event.clientY / window.innerHeight) - 0.5) * 14;
        heroVisual.style.setProperty("--tilt-x", `${x.toFixed(1)}px`);
        heroVisual.style.setProperty("--tilt-y", `${y.toFixed(1)}px`);
      }
    },
    { passive: true }
  );
}

const activeObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  { threshold: [0.35, 0.55], rootMargin: "-18% 0px -58% 0px" }
);

sections.forEach((section) => activeObserver.observe(section));
