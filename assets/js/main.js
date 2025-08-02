(function() {
  const button = document.getElementById('theme-toggle');
  if (button) {
    const setIcon = theme => {
      button.textContent = theme === 'dark' ? '☀️' : '🌙';
    };
    const initial = document.documentElement.getAttribute('data-theme');
    setIcon(initial);
    button.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', current);
      localStorage.setItem('theme', current);
      setIcon(current);
    });
  }

  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
})();
