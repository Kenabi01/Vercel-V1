document.addEventListener('touchmove', e => e.preventDefault(), { passive: false });
document.addEventListener('gesturestart', e => e.preventDefault());
document.addEventListener('dblclick', e => e.preventDefault());

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('scroll-container');
  const buttonContainer = document.createElement('div');
  buttonContainer.id = 'button-container';

  [1, 2, 3, 4].forEach(num => {
    const btn = document.createElement('button');
    btn.textContent = num;
    btn.addEventListener('click', () => {
      container.scrollTo({
        left: (num - 1) * window.innerWidth,
        behavior: 'smooth'
      });
    });
    buttonContainer.appendChild(btn);
  });

  document.body.appendChild(buttonContainer);
});
