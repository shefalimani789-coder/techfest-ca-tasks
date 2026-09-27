const parallaxLayers = document.querySelectorAll('[data-speed]');

const updateParallax = () => {
  const scrollY = window.scrollY;

  parallaxLayers.forEach((layer) => {
    const speed = Number(layer.dataset.speed || 0);
    const offset = scrollY * speed;
    layer.style.transform = `translate3d(0, ${offset}px, 0) scale(${1 + speed * 0.2})`;
  });
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document.querySelectorAll('.reveal').forEach((element) => {
  revealObserver.observe(element);
});

window.addEventListener('scroll', updateParallax, { passive: true });
window.addEventListener('load', updateParallax);
