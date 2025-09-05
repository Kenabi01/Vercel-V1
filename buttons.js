document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('scrollContainer');
  const buttons = document.querySelectorAll('#navButtons button');
  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      container.scrollTo({
        left: index * window.innerWidth,
        behavior: 'smooth'
      });
    });
  });
});
