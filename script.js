document.querySelectorAll('.isd').forEach(spoiler => {
  // Клик мышью
  spoiler.addEventListener('click', () => {
    spoiler.classList.toggle('revealed');
    spoiler.setAttribute(
      'aria-pressed',
      spoiler.classList.contains('revealed') ? 'true' : 'false'
    );
  });

  spoiler.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      spoiler.classList.toggle('revealed');
      spoiler.setAttribute(
        'aria-pressed',
        spoiler.classList.contains('revealed') ? 'true' : 'false'
      );
    }
  });
});