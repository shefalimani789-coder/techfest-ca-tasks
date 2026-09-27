const scene = document.getElementById('scene');

if (scene) {
  document.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 18;
    const y = (event.clientY / window.innerHeight - 0.5) * -18;

    scene.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  });

  document.addEventListener('pointerleave', () => {
    scene.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}
