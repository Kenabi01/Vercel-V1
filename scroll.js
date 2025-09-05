document.querySelectorAll('.scroll-button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const index = parseInt(btn.dataset.index, 10);
    const container = document.querySelector('.container');
    const target = container.children[index];
    if (target) {
      container.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
    }
  });
});
