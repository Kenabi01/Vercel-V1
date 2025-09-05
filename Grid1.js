(function () {
  const grid = document.createElement('div');
  grid.id = 'debug-grid';
  Object.assign(grid.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    pointerEvents: 'none',
    zIndex: '9999',
    backgroundImage:
      'linear-gradient(rgba(255,0,0,0.3) 1px, transparent 1px),\
linear-gradient(90deg, rgba(255,0,0,0.3) 1px, transparent 1px)',
    backgroundSize: '20px 20px',
  });

  const safe = document.createElement('div');
  safe.id = 'debug-safe-area';
  Object.assign(safe.style, {
    position: 'absolute',
    top: 'env(safe-area-inset-top)',
    right: 'env(safe-area-inset-right)',
    bottom: 'env(safe-area-inset-bottom)',
    left: 'env(safe-area-inset-left)',
    border: '2px dashed rgba(0,255,0,0.7)',
    boxSizing: 'border-box',
  });

  grid.appendChild(safe);
  document.body.appendChild(grid);
})();
