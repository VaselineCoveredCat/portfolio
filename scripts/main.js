const lenis = new Lenis({ wheelMultiplier: 1.2 });
const mediaQuery = window.matchMedia("(prefers-reduced-motion: no-preference)");

function raf() {
  lenis.raf();
  requestAnimationFrame(raf);
}

if (mediaQuery.matches) {
  requestAnimationFrame(raf);
} else {
  lenis.stop();
  lenis.destroy();
}
